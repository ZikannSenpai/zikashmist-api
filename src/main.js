import './style.css'

// Mengambil semua elemen yang memiliki class 'reveal'
const reveals = document.querySelectorAll('.reveal');

// Fungsi observer untuk memicu animasi saat di scroll
const revealCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Menambahkan class active saat elemen terlihat di layar
      entry.target.classList.add('active');
    } else {
      // Menghapus class active saat elemen keluar layar (Efek fade out)
      entry.target.classList.remove('active');
    }
  });
};

const revealOptions = {
  threshold: 0.15, // Memicu animasi ketika 15% elemen terlihat
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(revealCallback, revealOptions);

// Terapkan observer ke semua elemen
reveals.forEach(reveal => {
  observer.observe(reveal);
});
