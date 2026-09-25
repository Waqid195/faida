// Isi dari file: script.js

function toggleTeks() {
    var teksTambahan = document.getElementById("teks-tambahan");
    var btn = document.getElementById("btn-selengkapnya");

    if (teksTambahan.style.display === "none" || teksTambahan.style.display === "") {
        teksTambahan.style.display = "block"; 
        btn.innerHTML = "&laquo; Sembunyikan"; 
    } else {
        teksTambahan.style.display = "none"; 
        btn.innerHTML = "Selengkapnya tentang aku &raquo;"; 
    }
}