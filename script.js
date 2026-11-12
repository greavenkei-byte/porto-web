// Mobile Menu Toggle (Tombol menu garis tiga di HP)
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Project Filter Logic (untuk halaman projects.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus class 'active' dari semua tombol filter
            filterBtns.forEach(b => b.classList.remove('active'));
            // Tambahkan class 'active' ke tombol yang sedang diklik
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Interactive Hanging Card Movement (untuk kartu gantung di halaman about.html)
const hangingCard = document.getElementById('hanging-card');
if (hangingCard) {
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        hangingCard.style.transform = `rotate(${xAxis}deg) translateY(${yAxis}px)`;
    });
}

// Optimization: Pause video background hero saat tidak terlihat di layar
const bgVideo = document.querySelector('.hero-bg-video');
if (bgVideo) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bgVideo.play().catch(() => {});
            } else {
                bgVideo.pause();
            }
        });
    }, { threshold: 0.1 });
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        observer.observe(heroSection);
    }
}
