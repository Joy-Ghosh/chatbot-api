(function () {
  const scriptId = "my-chatbot-widget";
  if (document.getElementById(scriptId)) return;

  const iframe = document.createElement("iframe");
  iframe.id = scriptId;
  iframe.src = "https://linguachatbot.netlify.app/"; 
  // ✅ FLOAT BOTTOM-RIGHT
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";

  // ✅ FIXED WIDGET SIZE
  iframe.style.width = "400px";
  iframe.style.height = "600px";

  // ✅ MAKE IT LOOK LIKE A CHAT WIDGET
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "16px";
  iframe.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
  iframe.style.overflow = "hidden";
  iframe.style.background = "transparent";
  iframe.allow = "clipboard-write; microphone; camera";

  // ✅ ADD TRANSPARENT BACKGROUND TO IFRAME IF SUPPORTED
  iframe.setAttribute("allowTransparency", "true");

  document.body.appendChild(iframe);
})();