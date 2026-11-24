// Fitur login (Dev A) - data akun masih statis untuk latihan
const AKUN = { username: "admin", password: "admin123" };

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const pesan = document.getElementById("pesanError");

  if (username === AKUN.username && password === AKUN.password) {
    sessionStorage.setItem("userLogin", username);
    window.location.href = "booking.html";
  } else {
    pesan.textContent = "Username atau password salah. Periksa lagi lalu coba masuk.";
  }
});
