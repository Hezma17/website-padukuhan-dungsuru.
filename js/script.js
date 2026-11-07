
// Mengambil tombol menu
const menuToggle = document.getElementById("menuToggle");

// Mengambil daftar menu
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu HP
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Menutup menu setelah salah satu menu diklik
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});

// Menampilkan tahun otomatis
document.getElementById("year").textContent =
    new Date().getFullYear();
