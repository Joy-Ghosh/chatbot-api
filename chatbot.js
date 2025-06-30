(() => {
  const scriptId = "my-chatbot-widget";

  if (document.getElementById(scriptId)) return;

  const iframe = document.createElement("iframe");
  iframe.id = scriptId;

  // ✅ Add query parameter to indicate it's embedded
  iframe.src =
    "https://linguachatbot.netlify.app/?embedded=true";

  // ✅ INITIAL POSITIONING & SIZE (will be updated dynamically)
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "80px"; // Start small for chat launcher
  iframe.style.height = "80px";

  // ✅ COMPLETE TRANSPARENCY SETTINGS
  iframe.style.border = "none";
  iframe.style.background = "transparent";
  iframe.style.backgroundColor = "transparent";
  iframe.style.zIndex = "9999";
  iframe.style.overflow = "visible";
  iframe.style.colorScheme = "normal";
  iframe.style.transition = "width 0.3s ease, height 0.3s ease"; // Smooth resize animation

  // ✅ IFRAME ATTRIBUTES FOR TRANSPARENCY
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("frameBorder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.allow = "clipboard-write; microphone; camera";

  // ✅ LISTEN FOR RESIZE MESSAGES FROM IFRAME
  window.addEventListener("message", (event) => {
    // Security check - only accept messages from your domain
    if (event.origin !== "https://v0-multilingual-landing-page-wi.vercel.app") {
      return;
    }

    if (event.data && event.data.type === "CHATBOT_RESIZE") {
      const { width, height, isOpen } = event.data;

      // Update iframe size with smooth animation
      iframe.style.width = width + "px";
      iframe.style.height = height + "px";

      // Adjust positioning if needed when chat opens
      if (isOpen) {
        // Ensure chat doesn't go off-screen
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Adjust right position if chat would go off-screen
        if (width > viewportWidth - 40) {
          iframe.style.right = "10px";
          iframe.style.width = viewportWidth - 20 + "px";
        } else {
          iframe.style.right = "20px";
        }

        // Adjust bottom position if chat would go off-screen
        if (height > viewportHeight - 40) {
          iframe.style.bottom = "10px";
          iframe.style.height = viewportHeight - 20 + "px";
        } else {
          iframe.style.bottom = "20px";
        }
      } else {
        // Reset to original position when closed
        iframe.style.right = "20px";
        iframe.style.bottom = "20px";
      }
    }
  });

  // ✅ HANDLE WINDOW RESIZE
  window.addEventListener("resize", () => {
    // Send resize event to iframe so it can recalculate its size
    iframe.contentWindow?.postMessage({ type: "PARENT_RESIZE" }, "*");
  });

  // ✅ Force transparency after load
  iframe.onload = () => {
    try {
      // Additional transparency enforcement
      iframe.contentDocument.documentElement.style.background = "transparent";
      iframe.contentDocument.body.style.background = "transparent";
    } catch (e) {
      // Cross-origin restrictions - handled by the app itself
    }
  };

  document.body.appendChild(iframe);
})();
