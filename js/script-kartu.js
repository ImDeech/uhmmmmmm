function openEnvelope() {
    const container = document.querySelector('.container');
    container.classList.toggle('open');

    // Jika envelope terbuka, jalankan efek confetti
    if (container.classList.contains('open')) {
        // Confetti dari sudut kiri bawah
        confetti({
        particleCount: 50,
        angle: 60, // arah pop sedikit ke atas dan ke kanan
        spread: 55,
        origin: { x: 0, y: 1 }
        });
        // Confetti dari sudut kanan bawah
        confetti({
        particleCount: 50,
        angle: 120, // arah pop sedikit ke atas dan ke kiri
        spread: 55,
        origin: { x: 1, y: 1 }
        });
    }
}