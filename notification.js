// Fitur notifikasi (Dev D)
function tampilkanNotifikasi(pesan, jenis) {
  const toast = document.createElement("div");
  toast.textContent = pesan;
  toast.setAttribute("role", "status");
  toast.style.cssText =
    "position:fixed;right:20px;bottom:20px;padding:14px 18px;border-radius:6px;" +
    "color:#fff;font-family:Segoe UI,Arial,sans-serif;max-width:320px;" +
    "box-shadow:0 2px 8px rgba(0,0,0,.25);background:" +
    (jenis === "error" ? "#c0392b" : "#1e8e6e");

  document.body.appendChild(toast);
  setTimeout(function () { toast.remove(); }, 3500);
}
