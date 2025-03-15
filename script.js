// Menyimpan kunci (key) untuk menyimpan data di localStorage
const localStorageKey = "PRESS_FREQUENCY";

// Mengecek apakah browser mendukung Web Storage
if (typeof Storage !== "undefined") {
  // Mengecek apakah key 'PRESS_FREQUENCY' sudah ada di localStorage atau belum
  if (localStorage.getItem(localStorageKey) === null) {
    // Jika belum ada, set nilai awalnya menjadi 0
    localStorage.setItem(localStorageKey, 0);
  }

  // Mendapatkan referensi elemen tombol tambah, tombol reset, dan elemen untuk menampilkan jumlah klik
  const incrementButton = document.querySelector("#incrementButton");
  const clearButton = document.querySelector("#clear");
  const countDisplay = document.querySelector("#count");

  // Menampilkan nilai awal dari localStorage ke dalam elemen countDisplay
  countDisplay.innerText = localStorage.getItem(localStorageKey);

  // Menambahkan event listener pada tombol increment
  incrementButton.addEventListener("click", function () {
    // Mengambil nilai saat ini dari localStorage
    let count = localStorage.getItem(localStorageKey);
    count++; // Menambahkan nilai count (+1)

    // Memperbarui nilai count di localStorage
    localStorage.setItem(localStorageKey, count);

    // Menampilkan nilai terbaru di halaman
    countDisplay.innerText = localStorage.getItem(localStorageKey);
  });

  // Menambahkan event listener pada tombol clear
  clearButton.addEventListener("click", function () {
    // Menghapus data dari localStorage
    localStorage.removeItem(localStorageKey);

    // Menampilkan angka 0 karena data dihapus
    countDisplay.innerText = 0;
  });
} else {
  // Jika browser tidak mendukung Web Storage, tampilkan peringatan
  alert("Browser yang Anda gunakan tidak mendukung Web Storage");
}
