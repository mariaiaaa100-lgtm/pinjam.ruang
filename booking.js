// Fitur form peminjaman (Dev B)
const KUNCI = "dataBooking";

function ambilData() {
  return JSON.parse(localStorage.getItem(KUNCI) || "[]");
}

function simpanData(data) {
  localStorage.setItem(KUNCI, JSON.stringify(data));
}

function tampilkanDaftar() {
  const tbody = document.getElementById("daftarBooking");
  const data = ambilData();

  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">Belum ada peminjaman. Isi form di atas untuk mengajukan.</td></tr>';
    return;
  }

  tbody.innerHTML = data.map(function (b) {
    return "<tr><td>" + b.nama + "</td><td>" + b.ruang + "</td><td>" +
      b.tanggal + "</td><td>" + b.mulai + " - " + b.selesai + "</td></tr>";
  }).join("");
}

document.getElementById("formBooking").addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    nama: document.getElementById("nama").value.trim(),
    ruang: document.getElementById("ruang").value,
    tanggal: document.getElementById("tanggal").value,
    mulai: document.getElementById("mulai").value,
    selesai: document.getElementById("selesai").value
  };

  const data = ambilData();

  // Hook untuk fitur lain (Dev C dan Dev D). Aman dijalankan walau fitur belum digabung.
  if (typeof validasiJadwal === "function") {
    const hasil = validasiJadwal(booking, data);
    if (!hasil.valid) {
      document.getElementById("pesanError").textContent = hasil.pesan;
      if (typeof tampilkanNotifikasi === "function") tampilkanNotifikasi(hasil.pesan, "error");
      return;
    }
  }

  data.push(booking);
  simpanData(data);
  document.getElementById("pesanError").textContent = "";
  this.reset();
  tampilkanDaftar();

  if (typeof tampilkanNotifikasi === "function") {
    tampilkanNotifikasi("Peminjaman " + booking.ruang + " berhasil diajukan.", "sukses");
  }
});

tampilkanDaftar();
