# Education React Firebase Authentication

Pada pembelajaran ini kita akan mempelajari bagiamana cara untuk melakukan Registrasi User dan Sign In User pada aplikasi React.

Untuk Provider Usernya ini kita akan menggunakan Firebase, sebuah produk  dari Google, yang mana adalah suatu platform untuk mengembangkan aplikasi yang berisi kumpulan produk yang bisa mempermudah kita dalam mengembangkan aplikasi.

Sub-Produk dari Firebase yang akan digunakan di sini adalah `Firebase Authentication`.

Dokumentasi dari Firebase sendiri dapat dilihat pada [link ini](https://firebase.google.com/docs) yah

Langkah-langkah:
1. Menginstall firebase dan react-firebase-hooks dengan `npm i firebase react-firebase-hooks`
1. Membuat file `src/authentication/firebase.js`
1. Menambahkan logic untuk melakukan login dan register pada file `src/authentication/firebase.js`
1. Memodifikasi file `src/components/LoginOrRegisterForm.jsx` untuk dapat melakukan login dan register
1. Memodifikasi file `src/components/NavBar.jsx` untuk dapat melakukan signout
1. Memodifikasi file `App.js` untuk menggunakan proteksi route berdasarkan kondisi user apakah sedang ada yang login atau tidak