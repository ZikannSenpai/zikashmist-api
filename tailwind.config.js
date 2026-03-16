/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        // Skema warna Biru Gelap
        primary: '#0B1120',    // Background utama paling gelap
        secondary: '#111827',  // Background kartu/elemen
        accent: '#3B82F6',     // Biru terang untuk tombol/sorotan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins:[],
}
