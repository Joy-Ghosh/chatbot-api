  (function () {
    const iframe = document.createElement("iframe");
    iframe.src = "https://linguachatbot.netlify.app/";
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "390px";
    iframe.style.height = "700px";
    iframe.style.border = "none";
    iframe.style.zIndex = "9999";
    iframe.style.backgroundColor= "transparrent"
    // iframe.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.3)";
    iframe.style.borderRadius = "12px";

    document.body.appendChild(iframe);
  })();
