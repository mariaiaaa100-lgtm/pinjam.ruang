// Fitur validasi jadwal (Dev C)
function validasiJadwal(booking, daftar) {
  const hariIni = new Date().toISOString().split("T")[0];

  if (booking.tanggal < hariIni) {
    return { valid: false, pesan: "Tanggal sudah lewat. Pilih tanggal hari ini atau setelahnya." };
  }

  if (booking.selesai <= booking.mulai) {
    return { valid: false, pesan: "Jam selesai harus lebih besar dari jam mulai." };
  }

  const bentrok = daftar.some(function (b) {
    return b.ruang === booking.ruang &&
           b.tanggal === booking.tanggal &&
           booking.mulai < b.selesai &&
           booking.selesai > b.mulai;
  });

  if (bentrok) {
    return { valid: false, pesan: booking.ruang + " sudah dipakai pada jam tersebut. Pilih jam atau ruang lain." };
  }

  return { valid: true, pesan: "" };
}
