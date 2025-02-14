
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
