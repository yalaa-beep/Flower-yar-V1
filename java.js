document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // --- Fungsi Membuat Kupu-kupu ---
    function createButterfly() {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        
        // Buat sayap
        const leftWing = document.createElement('div');
        leftWing.classList.add('wing', 'left');
        const rightWing = document.createElement('div');
        rightWing.classList.add('wing', 'right');

        butterfly.appendChild(leftWing);
        butterfly.appendChild(rightWing);

        // Posisi awal acak di layar
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * (window.innerHeight * 0.6); // Bagian atas layar
        
        butterfly.style.left = `${startX}px`;
        butterfly.style.top = `${startY}px`;
        
        // Variasi warna sayap
        const colors = ['#ff9ff3', '#48dbfb', '#ff6b81', '#feca57'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        leftWing.style.background = `linear-gradient(135deg, ${color} 0%, transparent 100%)`;
        rightWing.style.background = `linear-gradient(135deg, ${color} 0%, transparent 100%)`;

        body.appendChild(butterfly);

        // Hapus setelah beberapa detik biar nggak nyangkut
        setTimeout(() => {
            butterfly.remove();
        }, 15000);
    }

    // --- Fungsi Membuat Hati (Love) ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        
        // Posisi acak di bagian bawah layar
        const x = Math.random() * window.innerWidth;
        heart.style.left = `${x}px`;
        heart.style.bottom = `0px`;
        
        // Ukuran acak
        const size = Math.random() * 10 + 5; // antara 5px - 15px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Kecepatan animasi acak
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;

        body.appendChild(heart);

        // Hapus setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // --- Jalankan Intervals ---
    // Munculkan kupu-kupu setiap 3 detik
    setInterval(createButterfly, 3000);
    // Langsung munculin 1 kupu-kupu di awal
    createButterfly(); 

    // Munculkan hati setiap 500ms (biar rame)
    setInterval(createHeart, 500);
});
