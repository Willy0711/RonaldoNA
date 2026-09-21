// =================================
// UMUR
// =================================

const tanggalLahir = new Date(2006, 8, 21);

function hitungUmur() {

    const sekarang = new Date();

    let umur =
        sekarang.getFullYear() -
        tanggalLahir.getFullYear();

    const bulanSekarang = sekarang.getMonth();
    const tanggalSekarang = sekarang.getDate();

    const bulanLahir = tanggalLahir.getMonth();
    const tanggalLahirHari = tanggalLahir.getDate();

    if (
        bulanSekarang < bulanLahir ||
        (
            bulanSekarang === bulanLahir &&
            tanggalSekarang < tanggalLahirHari
        )
    ) {
        umur--;
    }

    document.getElementById("age").textContent = umur;

    document.getElementById("age-2").textContent = umur;
}

hitungUmur();


// =================================
// PHOTO POPUP
// =================================
// const photos = document.querySelectorAll(".photo-card img");
// const photoModal = document.getElementById("photoModal");
// const modalImage = document.getElementById("modalImage");
// const modalCaption = document.getElementById("modalCaption");
// const closeModal = document.getElementById("closeModal");

// Klik foto
// photos.forEach(function(photo) {
//     photo.addEventListener("click", function() {
//         // Masukkan foto yang diklik
//         modalImage.src = this.src;
//         // Masukkan caption
//         modalCaption.textContent =
//             this.dataset.caption || this.alt;
//         // Tampilkan popup
//         photoModal.classList.add("active");
//         // Matikan scroll halaman
//         document.body.style.overflow = "hidden";
//     });
// });

// Klik tombol X
// closeModal.addEventListener("click", function() {
//     photoModal.classList.remove("active");
//     document.body.style.overflow = "";
// });

// Klik area hitam
// photoModal.addEventListener("click", function(event) {
//     if (event.target === photoModal) {
//         photoModal.classList.remove("active");
//         document.body.style.overflow = "";
//     }
// });

// Tekan ESC
// document.addEventListener("keydown", function(event) {
//     if (event.key === "Escape") {
//         photoModal.classList.remove("active");
//         document.body.style.overflow = "";
//     }
// });


const photos = document.querySelectorAll(".photo-card");

let currentPhoto = 0;

function showPhoto(index) {
    photos.forEach(photo => {
        photo.classList.remove("active");
    });

    photos[index].classList.add("active");
}

showPhoto(currentPhoto);

setInterval(() => {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto(currentPhoto);
}, 3000);