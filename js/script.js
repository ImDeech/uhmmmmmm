document.addEventListener("DOMContentLoaded", function () {
    let messages = document.querySelectorAll(".message");
    let currentIndex = 0;
    let envelope = document.querySelector(".envelope");
    let card = document.querySelector(".card");

    function showNextMessage() {
        messages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % messages.length;
        messages[currentIndex].classList.add("active");
    }

    setInterval(showNextMessage, 3000);

    envelope.addEventListener("click", function () {
        envelope.classList.add("opened"); // Tambahkan class untuk mengubah warna amplop
        card.classList.remove("hidden"); // Munculkan teks langsung
    });
});

let slideIndex = 0;
showSlides();
            
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

const progressBar = document.getElementById("progress-bar");
let progress = 0;
const interval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(interval);
        // Setelah loading selesai, sembunyikan loading screen dan tampilkan konten utama
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
        createConfetti();
    } else {
        progress++;
        progressBar.style.width = progress + "%";
    }
}, 30); // Sesuaikan kecepatan progress sesuai kebutuhan

function createConfetti() {
    const confettiCount = 100;
    const colors = ["#ff0d57", "#ff8000", "#ffd700", "#4caf50", "#2196f3", "#9c27b0"];
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        let size = Math.random() * 12 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = "absolute";
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `-20px`;
        confetti.style.borderRadius = "50%";
        confetti.style.opacity = "0.8";

        let animation = confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 2000,
            easing: "linear",
            iterations: 1
        });

        animation.onfinish = () => confetti.remove();
    }
}

window.onload = createConfetti;