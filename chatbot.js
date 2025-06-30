(function () {
  const scriptId = "my-chatbot-widget";
  
  if (document.getElementById(scriptId)) return;
  
  const iframe = document.createElement("iframe");
  iframe.id = scriptId;
  
  // ✅ Add query parameter to indicate it's embedded
  iframe.src = "https://linguachatbot.netlify.app/?embedded=true";
  
  // ✅ POSITIONING & SIZE
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  
  // ✅ TRANSPARENCY SETTINGS
  iframe.style.border = "none";
  iframe.style.background = "transparent";
  iframe.style.zIndex = "9999";
  iframe.style.overflow = "visible";
  iframe.style.pointerEvents = "none"; // Allow clicks to pass through transparent areas
  
  // ✅ IFRAME ATTRIBUTES
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("frameBorder", "0");
  iframe.allow = "clipboard-write; microphone; camera";
  
  // ✅ Enable pointer events only on the iframe content
  iframe.onload = function() {
    iframe.style.pointerEvents = "auto";
  };
  
  document.body.appendChild(iframe);
})();