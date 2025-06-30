(function () {
  const scriptId = "my-chatbot-widget";
  if (document.getElementById(scriptId)) return; // Avoid duplicates

  const iframe = document.createElement("iframe");
  iframe.id = scriptId;
  iframe.src = "https://v0-multilingual-landing-page-wi.vercel.app/"; // Your chatbot URL
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "12px";
  iframe.allow = "clipboard-write; microphone; camera";

  document.body.appendChild(iframe);
})();
