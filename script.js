// Fungsi untuk memindahkan halaman (Home, Karya, Pengalaman)
function tampilHalaman(idHalaman) {
    // Sembunyikan semua halaman
    const semuaHalaman = document.querySelectorAll('.page');
    semuaHalaman.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    const target = document.getElementById('page-' + idHalaman);
    if (target) {
        target.classList.add('active');
    }

    // Atur status aktif pada tombol navbar
    const semuaTombolNav = document.querySelectorAll('.nav-btn');
    semuaTombolNav.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Scroll otomatis ke atas saat pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk memfilter karya berdasarkan kategori
function filterKarya(kategori) {
    const kartuKarya = document.querySelectorAll('.karya-card');
    const tombolFilter = document.querySelectorAll('.filter-btn');

    // Ubah warna tombol filter yang aktif
    tombolFilter.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Tampilkan atau sembunyikan kartu sesuai kategori
    kartuKarya.forEach(kartu => {
        const jenis = kartu.getAttribute('data-kategori');
        if (kategori === 'semua' || jenis === kategori) {
            kartu.style.display = 'block';
        } else {
            kartu.style.display = 'none';
        }
    });
}
