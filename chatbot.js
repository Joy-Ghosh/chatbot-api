(function () {
  const scriptId = "my-chatbot-widget";
  
  if (document.getElementById(scriptId)) return;
  
  const iframe = document.createElement("iframe");
  iframe.id = scriptId;
  
  // ✅ Add query parameter to indicate it's embedded
  iframe.src = "https://linguachatbot.netlify.app?embedded=true";
  
  // ✅ POSITIONING & SIZE
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  
  // ✅ COMPLETE TRANSPARENCY SETTINGS
  iframe.style.border = "none";
  iframe.style.background = "transparent";
  iframe.style.backgroundColor = "transparent";
  iframe.style.zIndex = "9999";
  iframe.style.overflow = "visible";
  iframe.style.colorScheme = "normal"; // Prevent browser dark mode interference
  
  // ✅ IFRAME ATTRIBUTES FOR TRANSPARENCY
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("frameBorder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.allow = "clipboard-write; microphone; camera";
  
  // ✅ Force transparency after load
  iframe.onload = function() {
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