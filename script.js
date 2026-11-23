document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. PRELOADER (1X PER SESI)
    // =========================================================================
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');

    if (preloader) {
        if (sessionStorage.getItem('greaven_preloader_shown')) {
            preloader.classList.add('hidden');
        } else {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 14) + 8;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        preloader.classList.add('hidden');
                        sessionStorage.setItem('greaven_preloader_shown', 'true');
                    }, 260);
                }
                if (loaderBar) loaderBar.style.width = `${progress}%`;
                if (loaderPercent) loaderPercent.textContent = String(progress).padStart(3, '0') + '%';
            }, 55);
        }
    }

    // =========================================================================
    // 2. DATA 15 PROJECT STUDIES (FOR DYNAMIC PROJECT DETAIL VIEW)
    // =========================================================================
    const projectsData = {
        'anim-01': {
            title: '3D Character Body Mechanics',
            catYear: '3D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi mekanika gerak tubuh karakter 3D (walk cycle, perpindahan pusat gravitasi, dan overlap) menggunakan Blender sebagai spesialisasi utama di Kelas 11.',
            challenge: 'Menjaga keseimbangan bobot pinggul (COG) dan keluwesan lengkungan tulang belakang agar gerakan karakter tidak terlihat kaku seperti robot.',
            steps: ['Video Reference', 'Key Poses Blocking', 'Breakdown Poses', 'Spline & Graph Editor', 'Studio Lighting Render'],
            result: 'Menghasilkan animasi siklus gerak karakter 3D yang halus dengan ritme langkah alami dan kurva animasi yang bersih.',
            year: '2026 (Kelas 11)',
            category: '3D Character Animation',
            role: '3D Animator',
            tools: 'Blender 3D',
            client: 'Spesialisasi Animasi — SMKN 4 Madiun'
        },
        'anim-02': {
            title: '3D Logo Bumper — Forum BKK Jatim',
            catYear: '3D Animation & Motion • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Produksi video bumper 3D resmi untuk pembukaan acara Forum Bursa Kerja Khusus (BKK) Provinsi Jawa Timur.',
            challenge: 'Menerjemahkan identitas resmi acara menjadi animasi logo 3D berdurasi singkat yang megah, bersih, dan siap ditayangkan di layar panggung utama.',
            steps: ['Concept & Storyboard', '3D Logo Extrusion & Shading', 'Camera Path Animation', 'After Effects Compositing', 'Final Master Render'],
            result: 'Bumper pembuka beresolusi Full HD dengan pergerakan kamera sinematik, kilau material metalik, dan sinkronisasi efek suara.',
            year: '2026 (Kelas 11)',
            category: '3D Logo Bumper',
            role: '3D Animator & Motion Designer',
            tools: 'Blender, Adobe After Effects',
            client: 'Forum BKK Jawa Timur'
        },
        'anim-03': {
            title: '3D Character Acting & Expression',
            catYear: '3D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Studi akting karakter 3D bergaya stylized/anime yang menitikberatkan pada gestur tangan, antisipasi gerakan, dan perubahan ekspresi wajah.',
            challenge: 'Menyelaraskan timing kedipan mata, pergerakan alis, dan pose tubuh agar emosi karakter terbaca jelas oleh penonton.',
            steps: ['Acting Reference Recording', 'Thumbnail Poses', 'Stepped Blocking', 'Facial Rig Polish', 'Final Render'],
            result: 'Klip akting karakter berdurasi 10 detik dengan ekspresi komunikatif dan garis siluet yang kuat.',
            year: '2026 (Kelas 11)',
            category: '3D Character Acting',
            role: '3D Animator',
            tools: 'Autodesk Maya, Blender',
            client: 'Eksplorasi Mandiri Kelas 11'
        },
        'anim-04': {
            title: '3D Dynamic Action & Camera Cut',
            catYear: '3D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
            desc: 'Koreografi aksi dinamis 3D yang menggabungkan pose ekstrem, pergantian sudut kamera cepat, dan aksen visual motion blur.',
            challenge: 'Mempertahankan arah baca aksi (line of action) saat kamera berpindah sudut secara cepat.',
            steps: ['Animatic & Camera Timing', 'Extreme Action Poses', 'Impact Frames & Timing', 'Lighting & Motion Blur', 'Final Output'],
            result: 'Sequence aksi 3D bertempo cepat dengan dampak visual yang bertenaga.',
            year: '2026 (Kelas 11)',
            category: '3D Action Animation',
            role: '3D Animator',
            tools: 'Blender 3D',
            client: 'Eksplorasi Mandiri Kelas 11'
        },
        'anim-10-1': {
            title: '3D Walk Cycle & Physics Timing',
            catYear: '3D Animation • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
            desc: 'Latihan fondasi animasi 3D saat Kelas 10 meliputi prinsip fisika benda jatuh (bouncing ball), ayunan pendulum, dan siklus langkah dasar.',
            challenge: 'Memahami pembacaan kurva F-Curve (ease-in & ease-out) untuk pertama kalinya di ruang kerja 3D.',
            steps: ['Physics Timing Chart', 'Keyframes Setup', 'F-Curve Tangent Adjustment', 'Playblast Review'],
            result: 'Fondasi kuat dalam mengatur bobot dan percepatan objek di dalam Blender.',
            year: '2025 (Kelas 10)',
            category: '3D Foundation Animation',
            role: '3D Animator',
            tools: 'Blender 3D',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        '2d-10-1': {
            title: '2D 12 Principles of Animation',
            catYear: '2D Animation • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
            desc: 'Penerapan 12 prinsip dasar animasi seperti squash & stretch, anticipation, dan follow-through dalam medium 2D.',
            challenge: 'Menjaga konsistensi volume objek saat mengalami peregangan dan tekanan cepat.',
            steps: ['Rough Sketch', 'Keyframes & In-betweens', 'Clean-up', 'After Effects Export'],
            result: 'Kumpulan studi gerak 2D yang menjadi dasar pemahaman ritme sebelum masuk ke 3D.',
            year: '2025 (Kelas 10)',
            category: '2D Animation',
            role: '2D Animator',
            tools: 'Adobe After Effects',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        '2d-10-2': {
            title: '2D Motion Graphics & Typography',
            catYear: '2D Animation • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi tipografi kinetik dan transisi bentuk geometris yang disinkronkan dengan ketukan musik.',
            challenge: 'Mengatur keyframe velocity agar setiap transisi teks terasa responsif dan modern.',
            steps: ['Audio Beat Mapping', 'Layout & Typography', 'Shape Layer Animation', 'Final Render'],
            result: 'Video motion graphic berdurasi 15 detik dengan ritme visual presisi.',
            year: '2025 (Kelas 10)',
            category: '2D Motion Graphics',
            role: 'Motion Designer',
            tools: 'Adobe After Effects',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        'mod-10-1': {
            title: '3D Hard Surface & Prop Modeling',
            catYear: '3D Modeling • Arsip Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip karya divisi 3D Modeling saat Kelas 10: pemodelan objek mekanik dengan pengaturan bevel dan topologi quad bersih.',
            challenge: 'Menghindari shading artifact pada permukaan melengkung saat menggunakan subdivision surface.',
            steps: ['Blueprint Reference', 'Blockout Mesh', 'Support Loops & Bevel', 'Clay & Wireframe Render'],
            result: 'Model prop 3D siap pakai dengan struktur topologi yang rapi.',
            year: '2025 (Kelas 10)',
            category: '3D Modeling (Arsip Kls 10)',
            role: '3D Modeler',
            tools: 'Blender 3D',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        'mod-10-2': {
            title: '3D Isometric Room Environment',
            catYear: '3D Modeling • Arsip Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip karya Kelas 10 berupa diorama ruangan isometrik miniatur lengkap dengan furnitur dan pencahayaan studio.',
            challenge: 'Menata komposisi puluhan objek kecil agar tetap nyaman dipandang dalam satu sudut kamera ortografis.',
            steps: ['Room Layout', 'Furniture Modeling', 'Material & Color Palette', 'Cycles Studio Lighting'],
            result: 'Render diorama isometrik dengan suasana pencahayaan hangat.',
            year: '2025 (Kelas 10)',
            category: '3D Environment Modeling',
            role: '3D Modeler',
            tools: 'Blender, Autodesk Maya',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        'mod-10-3': {
            title: '3D Stylized Asset & UV Mapping',
            catYear: '3D Modeling • Arsip Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip latihan Kelas 10 dalam membentuk aset bergaya stylized serta proses pembukaan UV (UV Unwrapping).',
            challenge: 'Meminimalkan distorsi tekstur pada bagian sudut objek stylized.',
            steps: ['Silhouette Modeling', 'UV Seam & Unwrap', 'Base Material Shading', 'Turntable Render'],
            result: 'Aset 3D stylized dengan UV layout efisien.',
            year: '2025 (Kelas 10)',
            category: '3D Asset Modeling',
            role: '3D Modeler',
            tools: 'Autodesk Maya',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        'mulmed-01': {
            title: 'After Movie & Event Recap OSIS',
            catYear: 'Multimedia • OSIS Sekbid 9 (2025–2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
            desc: 'Produksi video rekapitulasi dan after-movie kegiatan besar sekolah oleh tim Sekbid 9 (Media Sosial & TIK) OSIS SMKN 4 Madiun.',
            challenge: 'Menggabungkan ratusan klip dari beberapa juru kamera lapangan menjadi alur cerita berdurasi 1–2 menit yang energik.',
            steps: ['Shot List & Liputan', 'Footage Culling', 'Beat-Sync Editing', 'Color Grading & Sound Design'],
            result: 'Video publikasi resmi di akun Instagram & TikTok OSIS SMKN 4 Madiun.',
            year: '2025–2026',
            category: 'Video Editing & Videography',
            role: 'Ketua Sekbid 9 & Lead Editor',
            tools: 'CapCut, Adobe After Effects',
            client: 'OSIS SMKN 4 Madiun'
        },
        'mulmed-02': {
            title: 'Bertugas Liputan & Publikasi OSIS',
            catYear: 'Multimedia • OSIS Sekbid 9 (2025–2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Dokumentasi lapangan dan pengelolaan konten visual untuk berbagai agenda sekolah mulai dari HUT sekolah hingga promosi jurusan.',
            challenge: 'Berkoordinasi cepat dengan tim fotografer dan admin media sosial agar publikasi tayang tepat waktu.',
            steps: ['Pembagian Tim Liputan', 'Dokumentasi Foto & Video', 'Kurasi Visual', 'Publikasi Media Sosial'],
            result: 'Arsip dokumentasi visual terstruktur selama satu periode kepengurusan.',
            year: '2025–2026',
            category: 'Event Documentation',
            role: 'Ketua Sekbid 9 OSIS',
            tools: 'DSLR/Mirrorless Camera, CapCut',
            client: 'OSIS SMKN 4 Madiun'
        },
        'mulmed-03': {
            title: 'Tim Mulmed & Visual Switcher',
            catYear: 'Multimedia • Live Streaming (2023–Sekarang)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
            desc: 'Mengoperasikan perangkat visual switcher dan pengaturan transisi siaran langsung multi-kamera dalam tim multimedia.',
            challenge: 'Menjaga perpindahan sudut kamera dan tampilan teks layar secara real-time tanpa jeda.',
            steps: ['Pre-Live Signal Check', 'Audio-Video Sync', 'Live Camera Switching', 'Stream Monitoring'],
            result: 'Tayangan siaran langsung stabil dengan pergantian sudut pandang yang dinamis.',
            year: '2023–Sekarang',
            category: 'Live Production & Broadcast',
            role: 'Visual Switcher Operator',
            tools: 'Video Switcher, OBS / Broadcast System',
            client: 'Tim Multimedia Gereja'
        },
        'mulmed-04': {
            title: 'Cameraman Utama Tim Multimedia',
            catYear: 'Multimedia • Videography (2023–Sekarang)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
            desc: 'Bertugas sebagai operator kamera utama dalam acara mingguan dan perayaan besar dengan fokus pada framing dan kestabilan gambar.',
            challenge: 'Menyesuaikan pencahayaan dan pergerakan kamera mengikuti jalannya acara secara langsung.',
            steps: ['Camera Rig Setup', 'White Balance & Exposure', 'Live Framing & Tracking', 'Post-Event Wrap'],
            result: 'Visual kamera utama yang tajam dan komunikatif sepanjang siaran.',
            year: '2023–Sekarang',
            category: 'Videography & Framing',
            role: 'Main Cameraman',
            tools: 'Production Video Camera & Tripod',
            client: 'Tim Multimedia Gereja'
        },
        'mulmed-05': {
            title: 'Freelance Camera & Video Editing',
            catYear: 'Multimedia • Freelance (2024–Sekarang)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
            desc: 'Layanan jasa perekaman video lapangan, operator rekaman, dan penyuntingan video promosi untuk kebutuhan klien independen.',
            challenge: 'Menerjemahkan kebutuhan setiap klien menjadi hasil video yang rapi dengan tenggat waktu cepat.',
            steps: ['Client Brief', 'On-Site Recording', 'Rough Cut & Revision', 'Color & Final Delivery'],
            result: 'Video dokumentasi dan promosi siap tayang sesuai standar klien.',
            year: '2024–Sekarang',
            category: 'Freelance Multimedia',
            role: 'Videographer & Video Editor',
            tools: 'CapCut, KineMaster, After Effects',
            client: 'Klien Freelance'
        }
    };

    const projectKeys = Object.keys(projectsData);

    // =========================================================================
    // 3. SPA NAVIGATION & VIEW ROUTER
    // =========================================================================
    const pageViews = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-links a[data-page], .mobile-menu a[data-page]');
    const pageTransition = document.getElementById('page-transition');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function triggerRevealObserver() {
        const reveals = document.querySelectorAll('.page-view.active .reveal, footer.reveal');
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 40) {
                el.classList.add('visible');
            }
        });
    }

    function loadProjectDetail(projectId) {
        const id = projectsData[projectId] ? projectId : projectKeys[0];
        const data = projectsData[id];
        const idx = projectKeys.indexOf(id);

        document.getElementById('dt-cat-year').textContent = data.catYear;
        document.getElementById('dt-title').textContent = data.title;
        document.getElementById('dt-desc').textContent = data.desc;
        document.getElementById('dt-challenge').textContent = data.challenge;
        document.getElementById('dt-result').textContent = data.result;

        document.getElementById('info-year').textContent = data.year;
        document.getElementById('info-cat').textContent = data.category;
        document.getElementById('info-role').textContent = data.role;
        document.getElementById('info-tools').textContent = data.tools;
        document.getElementById('info-client').textContent = data.client;

        const dtVideo = document.getElementById('dt-video');
        const dtVideoSrc = document.getElementById('dt-video-src');
        if (dtVideo && dtVideoSrc) {
            dtVideo.poster = data.poster;
            dtVideoSrc.src = data.video;
            dtVideo.load();
        }

        const stepsContainer = document.getElementById('dt-steps');
        if (stepsContainer) {
            stepsContainer.innerHTML = data.steps
                .map((s, i) => `<span>0${i + 1}. ${s}</span>`)
                .join('');
        }

        const prevIdx = (idx - 1 + projectKeys.length) % projectKeys.length;
        const nextIdx = (idx + 1) % projectKeys.length;
        const prevId = projectKeys[prevIdx];
        const nextId = projectKeys[nextIdx];

        const navPrev = document.getElementById('nav-prev');
        const navNext = document.getElementById('nav-next');
        if (navPrev) {
            navPrev.href = `#project-detail?id=${prevId}`;
            navPrev.setAttribute('data-project-id', prevId);
            document.getElementById('prev-title').textContent = projectsData[prevId].title;
        }
        if (navNext) {
            navNext.href = `#project-detail?id=${nextId}`;
            navNext.setAttribute('data-project-id', nextId);
            document.getElementById('next-title').textContent = projectsData[nextId].title;
        }
    }

    function switchPage(pageName, projectId = null, withCurtain = true) {
        const targetId = `view-${pageName}`;
        const targetView = document.getElementById(targetId);
        if (!targetView) return;

        const executeSwitch = () => {
            pageViews.forEach(view => view.classList.remove('active'));
            targetView.classList.add('active');

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-page') === pageName);
            });

            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                if (hamburgerBtn) hamburgerBtn.classList.remove('open');
            }

            if (pageName === 'project-detail') {
                loadProjectDetail(projectId);
            }

            window.scrollTo({ top: 0, behavior: 'instant' });
            setTimeout(() => {
                triggerRevealObserver();
                animateProficiencyBars();
            }, 60);
        };

        if (withCurtain && pageTransition) {
            pageTransition.classList.add('active');
            setTimeout(() => {
                executeSwitch();
                setTimeout(() => pageTransition.classList.remove('active'), 180);
            }, 240);
        } else {
            executeSwitch();
        }
    }

    document.addEventListener('click', (e) => {
        const detailTrigger = e.target.closest('[data-project-id]');
        if (detailTrigger) {
            e.preventDefault();
            const pid = detailTrigger.getAttribute('data-project-id');
            history.pushState(null, '', `#project-detail?id=${pid}`);
            switchPage('project-detail', pid, true);
            return;
        }

        const pageTrigger = e.target.closest('[data-page]');
        if (pageTrigger) {
            e.preventDefault();
            const targetPage = pageTrigger.getAttribute('data-page');
            history.pushState(null, '', `#${targetPage}`);
            switchPage(targetPage, null, true);
        }
    });

    function handleHashRoute() {
        const hash = window.location.hash.replace('#', '');
        if (!hash || hash === 'home') {
            switchPage('home', null, false);
        } else if (hash.startsWith('project-detail')) {
            const params = new URLSearchParams(hash.split('?')[1] || '');
            switchPage('project-detail', params.get('id'), false);
        } else if (document.getElementById(`view-${hash}`)) {
            switchPage(hash, null, false);
        }
    }

    window.addEventListener('popstate', handleHashRoute);
    handleHashRoute();

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
    }

    // =========================================================================
    // 4. SCROLL REVEAL, TIMELINE PROGRESS & PROFICIENCY BARS
    // =========================================================================
    const timelineEl = document.getElementById('process-timeline');
    const timelineProgress = document.getElementById('timeline-progress');

    function updateTimelineProgress() {
        if (!timelineEl || !timelineProgress) return;
        const rect = timelineEl.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.top < viewH * 0.75 && rect.bottom > 0) {
            const scrolled = (viewH * 0.75) - rect.top;
            const pct = Math.min(100, Math.max(0, (scrolled / rect.height) * 100));
            timelineProgress.style.height = `${pct}%`;
        }
    }

    let barsAnimated = false;
    function animateProficiencyBars() {
        const panel = document.getElementById('proficiency-panel');
        if (!panel || barsAnimated) return;
        const rect = panel.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.height > 0) {
            barsAnimated = true;
            panel.querySelectorAll('.prof-item').forEach(item => {
                const target = parseInt(item.getAttribute('data-target'), 10) || 0;
                const fill = item.querySelector('.prof-fill');
                const pctText = item.querySelector('.prof-pct');
                if (fill) fill.style.width = `${target}%`;
                if (pctText) {
                    let count = 0;
                    const step = setInterval(() => {
                        count += 2;
                        if (count >= target) {
                            count = target;
                            clearInterval(step);
                        }
                        pctText.textContent = `${count}%`;
                    }, 18);
                }
            });
        }
    }

    window.addEventListener('scroll', () => {
        triggerRevealObserver();
        updateTimelineProgress();
        animateProficiencyBars();
    });
    triggerRevealObserver();

    // =========================================================================
    // 5. INTERACTIVE LANYARD & FLIP ID CARD (ABOUT PAGE)
    // =========================================================================
    const idCard = document.getElementById('physics-id-card');
    const flipCardBtn = document.getElementById('flip-card-btn');
    const lanyardLine = document.getElementById('lanyard-dynamic-line');
    const lanyardClasp = document.getElementById('lanyard-clasp');

    if (flipCardBtn && idCard) {
        flipCardBtn.addEventListener('click', () => {
            idCard.classList.toggle('flipped');
        });
    }

    if (idCard) {
        let isDragging = false;
        let startX = 0;
        let currentAngle = 0;
        let velocity = 0;

        const updateCardSwing = () => {
            if (!isDragging) {
                const springForce = -0.08 * currentAngle;
                velocity = (velocity + springForce) * 0.88;
                currentAngle += velocity;
            }
            const flippedDeg = idCard.classList.contains('flipped') ? 180 : 0;
            idCard.style.transform = `rotate(${currentAngle.toFixed(2)}deg) rotateY(${flippedDeg}deg)`;

            const offsetX = currentAngle * 1.4;
            if (lanyardLine) {
                lanyardLine.setAttribute('d', `M 160 -20 Q ${160 + offsetX * 0.5} 35 ${160 + offsetX} 88`);
            }
            if (lanyardClasp) {
                lanyardClasp.setAttribute('transform', `translate(${160 + offsetX}, 88) rotate(${-currentAngle * 0.5})`);
            }
            requestAnimationFrame(updateCardSwing);
        };
        requestAnimationFrame(updateCardSwing);

        idCard.addEventListener('pointerdown', (e) => {
            isDragging = true;
            startX = e.clientX;
            idCard.setPointerCapture(e.pointerId);
        });

        idCard.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            currentAngle = Math.max(-28, Math.min(28, -deltaX * 0.18));
            velocity = 0;
        });

        idCard.addEventListener('pointerup', () => {
            isDragging = false;
        });
    }

    // =========================================================================
    // 6. PROJECTS MULTI-FILTERING SYSTEM (15 WORKS)
    // =========================================================================
    const branchBtns = document.querySelectorAll('.branch-btn');
    const panel2d3d = document.getElementById('panel-2d3d');
    const panelMulmed = document.getElementById('panel-mulmed');
    const projectCards = document.querySelectorAll('.project-card');
    const emptyFilterMsg = document.getElementById('empty-filter-msg');

    let currentBranch = '2d3d';
    let filterDim = 'all';
    let filterGrade = 'all';
    let filterDiv = 'all';
    let filterMulmed = 'all';

    function applyProjectFilters() {
        let visibleCount = 0;
        projectCards.forEach(card => {
            const branch = card.getAttribute('data-branch');
            let show = false;

            if (branch === currentBranch) {
                if (currentBranch === '2d3d') {
                    const dim = card.getAttribute('data-dim');
                    const grade = card.getAttribute('data-grade');
                    const div = card.getAttribute('data-div');
                    const matchDim = filterDim === 'all' || dim === filterDim;
                    const matchGrade = filterGrade === 'all' || grade === filterGrade;
                    const matchDiv = filterDiv === 'all' || div === filterDiv;
                    show = matchDim && matchGrade && matchDiv;
                } else {
                    const mCat = card.getAttribute('data-mulmed');
                    show = filterMulmed === 'all' || mCat === filterMulmed;
                }
            }

            card.classList.toggle('hidden-card', !show);
            if (show) {
                visibleCount++;
                card.classList.add('visible');
            }
        });

        if (emptyFilterMsg) {
            emptyFilterMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    branchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            branchBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentBranch = btn.getAttribute('data-branch');

            if (currentBranch === '2d3d') {
                if (panel2d3d) panel2d3d.classList.remove('hidden');
                if (panelMulmed) panelMulmed.classList.add('hidden');
            } else {
                if (panel2d3d) panel2d3d.classList.add('hidden');
                if (panelMulmed) panelMulmed.classList.remove('hidden');
            }
            applyProjectFilters();
        });
    });

    function bindFilterGroup(containerId, setter) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                setter(btn.getAttribute('data-val'));
                applyProjectFilters();
            });
        });
    }

    bindFilterGroup('filter-dim', val => { filterDim = val; });
    bindFilterGroup('filter-grade', val => { filterGrade = val; });
    bindFilterGroup('filter-div', val => { filterDiv = val; });
    bindFilterGroup('filter-mulmed', val => { filterMulmed = val; });

    // =========================================================================
    // 7. QUICK PREVIEW MODAL
    // =========================================================================
    const previewModal = document.getElementById('preview-modal');
    const modalMediaArea = document.getElementById('modal-media-area');
    const modalTitleText = document.getElementById('modal-title-text');
    const modalMetaText = document.getElementById('modal-meta-text');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');

    let visibleQuickBtns = [];
    let currentModalIdx = 0;

    function openQuickModal(idx) {
        if (!visibleQuickBtns.length || !previewModal) return;
        currentModalIdx = (idx + visibleQuickBtns.length) % visibleQuickBtns.length;
        const btn = visibleQuickBtns[currentModalIdx];
        const type = btn.getAttribute('data-type');
        const src = btn.getAttribute('data-src');
        const title = btn.getAttribute('data-title');
        const meta = btn.getAttribute('data-meta');

        if (modalTitleText) modalTitleText.textContent = title;
        if (modalMetaText) modalMetaText.textContent = meta;

        if (modalMediaArea) {
            if (type === 'video') {
                modalMediaArea.innerHTML = `<video controls autoplay playsinline><source src="${src}" type="video/mp4"></video>`;
            } else {
                modalMediaArea.innerHTML = `<img src="${src}" alt="${title}">`;
            }
        }
        previewModal.classList.add('open');
    }

    function closeQuickModal() {
        if (!previewModal) return;
        previewModal.classList.remove('open');
        if (modalMediaArea) modalMediaArea.innerHTML = '';
    }

    document.querySelectorAll('.btn-quick-view').forEach(btn => {
        btn.addEventListener('click', () => {
            visibleQuickBtns = Array.from(document.querySelectorAll('.project-card:not(.hidden-card) .btn-quick-view'));
            const idx = visibleQuickBtns.indexOf(btn);
            openQuickModal(idx >= 0 ? idx : 0);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickModal);
    if (previewModal) {
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closeQuickModal();
        });
    }
    if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => openQuickModal(currentModalIdx - 1));
    if (modalNextBtn) modalNextBtn.addEventListener('click', () => openQuickModal(currentModalIdx + 1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && previewModal && previewModal.classList.contains('open')) {
            closeQuickModal();
        }
    });

    // =========================================================================
    // 8. COPY EMAIL BUTTON (CONTACT PAGE)
    // =========================================================================
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = copyEmailBtn.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                const originalHTML = copyEmailBtn.innerHTML;
                copyEmailBtn.textContent = '✓ Email Tersalin!';
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    }

    // =========================================================================
    // 9. INTERACTIVE ORBITAL LOGO SHOWCASE (HOME HERO)
    // =========================================================================
    const orbitToolsInfo = {
        blender: {
            cat: '3D ANIMATION ENGINE',
            name: 'Blender 3D',
            desc: '3D Character Animation, Graph Editor & visual bumper.'
        },
        maya: {
            cat: 'CHARACTER RIG & ANIMATE',
            name: 'Autodesk Maya',
            desc: 'Blocking pose-to-pose, facial acting & body mechanics.'
        },
        ae: {
            cat: 'MOTION & COMPOSITING',
            name: 'Adobe After Effects',
            desc: 'Motion graphics bumper, compositing & visual effects.'
        },
        capcut: {
            cat: 'VIDEO EDITING PIPELINE',
            name: 'CapCut',
            desc: 'Fast-paced event recap, color grading & beat sync.'
        }
    };

    const orbitNodes = document.querySelectorAll('.orbit-node');
    const orbitCatEl = document.getElementById('orbit-tool-cat');
    const orbitNameEl = document.getElementById('orbit-tool-name');
    const orbitDescEl = document.getElementById('orbit-tool-desc');

    if (orbitNodes.length > 0 && orbitNameEl) {
        orbitNodes.forEach(node => {
            const updateOrbitCard = () => {
                orbitNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                const key = node.getAttribute('data-tool');
                const info = orbitToolsInfo[key];
                if (info) {
                    if (orbitCatEl) orbitCatEl.textContent = info.cat;
                    orbitNameEl.textContent = info.name;
                    if (orbitDescEl) orbitDescEl.textContent = info.desc;
                }
            };
            node.addEventListener('mouseenter', updateOrbitCard);
            node.addEventListener('click', updateOrbitCard);
        });
    }
});
