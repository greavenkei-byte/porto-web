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
                progress += Math.floor(Math.random() * 14) + 9;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        preloader.classList.add('hidden');
                        sessionStorage.setItem('greaven_preloader_shown', 'true');
                    }, 250);
                }
                if (loaderBar) loaderBar.style.width = `${progress}%`;
                if (loaderPercent) loaderPercent.textContent = String(progress).padStart(3, '0') + '%';
            }, 50);
        }
    }

    // =========================================================================
    // 2. DATA 15 STUDI KASUS PROYEK
    // =========================================================================
    const projectsData = {
        'anim-01': {
            title: '3D Character Body Mechanics',
            catYear: '3D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi mekanika gerak tubuh karakter 3D (walk cycle, perpindahan pusat gravitasi, dan overlap) menggunakan Blender sebagai spesialisasi utama di Kelas 11.',
            challenge: 'Menjaga keseimbangan bobot pinggul (COG) dan keluwesan lengkungan tulang belakang agar gerakan karakter tidak terlihat kaku.',
            steps: ['Video Reference', 'Key Poses Blocking', 'Breakdown Poses', 'Spline & Graph Editor', 'Studio Lighting Render'],
            result: 'Menghasilkan animasi siklus gerak karakter 3D yang halus dengan ritme langkah alami dan kurva animasi bersih.',
            year: '2026 (Kelas 11)',
            category: '3D Character Animation',
            role: '3D Animator',
            tools: 'Blender',
            client: 'Spesialisasi Animasi — SMKN 4 Madiun'
        },
        'anim-02': {
            title: '3D Visual Opening Sequence',
            catYear: '3D Animation & Motion • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Produksi sequence pembuka 3D dengan pergerakan kamera sinematik, pencahayaan kontras, dan compositing.',
            challenge: 'Menyelaraskan pergerakan kamera 3D dengan ritme transisi visual agar terasa megah dan bersih.',
            steps: ['Concept & Storyboard', '3D Scene & Shading', 'Camera Path Animation', 'After Effects Compositing', 'Final Master Render'],
            result: 'Video opening beresolusi Full HD dengan kilau material metalik dan sinkronisasi efek suara.',
            year: '2026 (Kelas 11)',
            category: '3D Motion & Opening',
            role: '3D Animator & Motion Designer',
            tools: 'Blender, Adobe After Effects',
            client: 'Proyek Kreatif Kelas 11'
        },
        'anim-03': {
            title: '3D Character Acting & Expression',
            catYear: '3D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Studi akting karakter 3D bergaya stylized yang menitikberatkan pada gestur tangan, antisipasi gerakan, dan perubahan ekspresi wajah.',
            challenge: 'Menyelaraskan timing kedipan mata, pergerakan alis, dan pose tubuh agar emosi karakter terbaca jelas.',
            steps: ['Acting Reference Recording', 'Thumbnail Poses', 'Stepped Blocking', 'Facial Rig Polish', 'Final Render'],
            result: 'Klip akting karakter dengan ekspresi komunikatif dan garis siluet yang kuat.',
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
            desc: 'Koreografi aksi dinamis 3D yang menggabungkan pose ekstrem, pergantian sudut kamera cepat, dan aksen motion blur.',
            challenge: 'Mempertahankan arah baca aksi (line of action) saat kamera berpindah sudut secara cepat.',
            steps: ['Animatic & Camera Timing', 'Extreme Action Poses', 'Impact Frames & Timing', 'Lighting & Motion Blur', 'Final Output'],
            result: 'Sequence aksi 3D bertempo cepat dengan dampak visual bertenaga.',
            year: '2026 (Kelas 11)',
            category: '3D Action Animation',
            role: '3D Animator',
            tools: 'Blender',
            client: 'Eksplorasi Mandiri Kelas 11'
        },
        'anim-10-1': {
            title: '3D Walk Cycle & Physics Timing',
            catYear: '3D Animation • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
            desc: 'Latihan fondasi animasi 3D saat Kelas 10 meliputi prinsip fisika benda jatuh, ayunan pendulum, dan siklus langkah dasar.',
            challenge: 'Memahami pembacaan kurva F-Curve (ease-in & ease-out) untuk pertama kalinya di ruang kerja 3D.',
            steps: ['Physics Timing Chart', 'Keyframes Setup', 'F-Curve Tangent Adjustment', 'Playblast Review'],
            result: 'Fondasi kuat dalam mengatur bobot dan percepatan objek di dalam Blender.',
            year: '2025 (Kelas 10)',
            category: '3D Foundation Animation',
            role: '3D Animator',
            tools: 'Blender',
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
            catYear: '2D Animation • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi tipografi kinetik dan transisi bentuk geometris yang disinkronkan dengan ketukan musik.',
            challenge: 'Mengatur keyframe velocity agar setiap transisi teks terasa responsif dan modern.',
            steps: ['Audio Beat Mapping', 'Layout & Typography', 'Shape Layer Animation', 'Final Render'],
            result: 'Video motion graphic berdurasi 15 detik dengan ritme visual presisi.',
            year: '2026 (Kelas 11)',
            category: '2D Motion Graphics',
            role: 'Motion Designer',
            tools: 'Adobe After Effects',
            client: 'Eksplorasi 2D Kelas 11'
        },
        'mod-10-1': {
            title: '3D Hard Surface & Prop Modeling',
            catYear: '3D Modeling • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Karya divisi 3D Modeling saat Kelas 10: pemodelan objek mekanik dengan pengaturan bevel dan topologi quad bersih.',
            challenge: 'Menghindari shading artifact pada permukaan melengkung saat menggunakan subdivision surface.',
            steps: ['Blueprint Reference', 'Blockout Mesh', 'Support Loops & Bevel', 'Clay & Wireframe Render'],
            result: 'Model prop 3D siap pakai dengan struktur topologi yang rapi.',
            year: '2025 (Kelas 10)',
            category: '3D Modeling',
            role: '3D Modeler',
            tools: 'Blender',
            client: 'Tugas Jurusan Animasi — SMKN 4 Madiun'
        },
        'mod-10-2': {
            title: '3D Isometric Room Environment',
            catYear: '3D Modeling • Kelas 10 (2025)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Diorama ruangan isometrik miniatur lengkap dengan furnitur dan pencahayaan studio.',
            challenge: 'Menata komposisi puluhan objek kecil agar tetap nyaman dipandang dalam satu sudut kamera.',
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
            catYear: '3D Modeling • Kelas 11 (2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Pembentukan aset bergaya stylized serta proses pembukaan UV (UV Unwrapping) untuk kebutuhan animasi.',
            challenge: 'Meminimalkan distorsi tekstur pada bagian sudut objek stylized.',
            steps: ['Silhouette Modeling', 'UV Seam & Unwrap', 'Base Material Shading', 'Turntable Render'],
            result: 'Aset 3D stylized dengan UV layout efisien.',
            year: '2026 (Kelas 11)',
            category: '3D Asset Modeling',
            role: '3D Modeler',
            tools: 'Autodesk Maya, Blender',
            client: 'SMKN 4 Madiun'
        },
        'mulmed-01': {
            title: 'After Movie & Event Recap OSIS',
            catYear: 'Multimedia • Ketua Sekbid 9 OSIS (2025–2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            poster: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
            desc: 'Produksi video rekapitulasi dan after-movie kegiatan besar sekolah oleh tim Sekbid 9 OSIS SMKN 4 Madiun.',
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
            catYear: 'Multimedia • Ketua Sekbid 9 OSIS (2025–2026)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            poster: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Dokumentasi lapangan dan pengelolaan konten visual untuk berbagai agenda sekolah.',
            challenge: 'Berkoordinasi cepat dengan tim fotografer dan admin media sosial agar publikasi tayang tepat waktu.',
            steps: ['Team Coordination', 'Dokumentasi Foto & Video', 'Kurasi Visual', 'Publikasi Media Sosial'],
            result: 'Arsip dokumentasi visual terstruktur selama satu periode kepengurusan.',
            year: '2025–2026',
            category: 'Event Documentation',
            role: 'Ketua Sekbid 9 OSIS',
            tools: 'Camera, CapCut',
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
            role: 'Live Streaming Switcher',
            tools: 'Video Switcher, Broadcast System',
            client: 'Tim Multimedia'
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
            client: 'Tim Multimedia'
        },
        'mulmed-05': {
            title: 'Freelance Camera & Video Editing',
            catYear: 'Multimedia • Freelance (2024–Sekarang)',
            video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
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
                if (pageName === 'projects') {
                    renderShowcaseSlider();
                }
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
        // Jangan trigger navigasi saat klik kartu samping di slider (biar kartu samping geser ke tengah dulu)
        const showcaseCard = e.target.closest('.showcase-card');
        if (showcaseCard && !showcaseCard.classList.contains('is-active')) {
            return;
        }

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
    // 5. WEB AUDIO API "WHOOSH" SOUND SYNTHESIZER
    // =========================================================================
    let audioCtx = null;
    function playWhooshSound() {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            if (!audioCtx) audioCtx = new AudioContextClass();
            if (audioCtx.state === 'suspended') audioCtx.resume();

            const duration = 0.38;
            const bufferSize = Math.floor(audioCtx.sampleRate * duration);
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;

            const filter = audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.Q.value = 1.8;
            const now = audioCtx.currentTime;
            filter.frequency.setValueAtTime(220, now);
            filter.frequency.exponentialRampToValueAtTime(1150, now + 0.16);
            filter.frequency.exponentialRampToValueAtTime(320, now + duration);

            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);

            noise.start(now);
            noise.stop(now + duration);
        } catch (err) {
            // Abaikan jika browser memblokir audio sebelum interaksi
        }
    }

    // =========================================================================
    // 6. INTERACTIVE LANYARD ID CARD (TALI TERIKAT KUAT + BATAS TARIK + FLIP)
    // =========================================================================
    const idCard = document.getElementById('physics-id-card');
    const flipCardBtn = document.getElementById('flip-card-btn');
    const flipVisualRing = document.getElementById('flip-visual-ring');
    const lanyardLine = document.getElementById('lanyard-dynamic-line');
    const lanyardStrapBack = document.getElementById('lanyard-strap-back');
    const lanyardClasp = document.getElementById('lanyard-clasp');

    let isFlipped = false;
    let flipAngle = 0;
    let targetFlipAngle = 0;

    function triggerFlipCard() {
        isFlipped = !isFlipped;
        targetFlipAngle = isFlipped ? 180 : 0;
        playWhooshSound();

        if (idCard) {
            idCard.classList.remove('gloss-sweep');
            void idCard.offsetWidth;
            idCard.classList.add('gloss-sweep');
        }
        if (flipVisualRing) {
            flipVisualRing.classList.remove('burst');
            void flipVisualRing.offsetWidth;
            flipVisualRing.classList.add('burst');
        }
    }

    if (flipCardBtn) {
        flipCardBtn.addEventListener('click', triggerFlipCard);
    }

    if (idCard) {
        idCard.addEventListener('dblclick', triggerFlipCard);

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let pullX = 0;
        let pullY = 0;
        let velX = 0;
        let velY = 0;

        const updatePhysicsLoop = () => {
            if (!isDragging) {
                const springK = 0.085;
                const damping = 0.84;
                velX = (velX + -springK * pullX) * damping;
                velY = (velY + -springK * pullY) * damping;
                pullX += velX;
                pullY += velY;
            }

            // Smooth flip interpolation
            flipAngle += (targetFlipAngle - flipAngle) * 0.14;

            // Rotasi ayunan alami mengikuti tarikan horizontal
            const swingDeg = Math.max(-22, Math.min(22, -pullX * 0.28));
            const scaleBoost = isDragging ? 1.03 : 1;

            idCard.style.transform = `translate3d(${pullX.toFixed(2)}px, ${pullY.toFixed(2)}px, 0) rotate(${swingDeg.toFixed(2)}deg) rotateY(${flipAngle.toFixed(2)}deg) scale(${scaleBoost})`;

            // Titik pengait atas kartu bergerak persis mengikuti pullX dan pullY
            const clipX = 160 + pullX;
            const clipY = 95 + pullY;

            if (lanyardLine) {
                const ctrlX = 166 + pullX * 0.45;
                const ctrlY = 40 + pullY * 0.55;
                lanyardLine.setAttribute('d', `M 172 -15 Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${clipX.toFixed(1)} ${clipY.toFixed(1)}`);
            }
            if (lanyardStrapBack) {
                lanyardStrapBack.setAttribute('d', `M 148 -15 L ${clipX.toFixed(1)} ${clipY.toFixed(1)}`);
            }
            if (lanyardClasp) {
                lanyardClasp.setAttribute('transform', `translate(${clipX.toFixed(1)}, ${clipY.toFixed(1)}) rotate(${(swingDeg * 0.6).toFixed(1)})`);
            }

            requestAnimationFrame(updatePhysicsLoop);
        };
        requestAnimationFrame(updatePhysicsLoop);

        idCard.addEventListener('pointerdown', (e) => {
            isDragging = true;
            startX = e.clientX - pullX;
            startY = e.clientY - pullY;
            idCard.setPointerCapture(e.pointerId);
        });

        idCard.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const rawX = e.clientX - startX;
            const rawY = e.clientY - startY;

            // Batas tarikan aman agar kartu TIDAK pernah menabrak teks "About Me"
            pullX = Math.max(-68, Math.min(68, rawX));
            pullY = Math.max(-18, Math.min(82, rawY));
            velX = 0;
            velY = 0;
        });

        const releaseCard = () => {
            isDragging = false;
        };

        idCard.addEventListener('pointerup', releaseCard);
        idCard.addEventListener('pointercancel', releaseCard);
    }

    // =========================================================================
    // 7. PROJECTS 3D CURVED SPOTLIGHT SLIDER & MULTI-FILTER (OPTION C)
    // =========================================================================
    const primaryTabs = document.querySelectorAll('.primary-tab');
    const subFilterPanel = document.getElementById('sub-filter-panel');
    const filterGradeRow = document.getElementById('filter-grade-row');
    const filterDivRow = document.getElementById('filter-div-row');
    const allShowcaseCards = Array.from(document.querySelectorAll('.showcase-card'));
    const showcaseTrack = document.getElementById('showcase-track');
    const sliderPrevBtn = document.getElementById('slider-prev-btn');
    const sliderNextBtn = document.getElementById('slider-next-btn');
    const sliderCounter = document.getElementById('slider-counter');
    const sliderDotsContainer = document.getElementById('slider-dots');

    let activeCategory = 'all'; // 'all' | '3d' | '2d' | 'multimedia'
    let activeGrade = 'all';    // 'all' | '10' | '11'
    let activeDiv = 'all';      // 'all' | 'modeling' | 'animasi'
    let currentSlideIdx = 0;
    let visibleCards = [...allShowcaseCards];

    function renderShowcaseSlider() {
        const total = visibleCards.length;
        if (total === 0) return;

        if (currentSlideIdx >= total) currentSlideIdx = 0;
        if (currentSlideIdx < 0) currentSlideIdx = total - 1;

        visibleCards.forEach((card, idx) => {
            const offset = idx - currentSlideIdx;
            const absOffset = Math.abs(offset);

            card.classList.toggle('is-active', offset === 0);

            if (offset === 0) {
                card.style.transform = 'translate3d(0px, -6px, 90px) rotateY(0deg) rotateZ(0deg) scale(1)';
                card.style.opacity = '1';
                card.style.zIndex = '25';
                card.style.pointerEvents = 'auto';
            } else {
                const spreadX = window.innerWidth < 640 ? 235 : 320;
                const x = offset * spreadX;
                const curveY = absOffset * 28; // Lengkungan kipas ala video detik ke-5
                const z = -absOffset * 125;
                const rotY = Math.max(-36, Math.min(36, -offset * 18));
                const rotZ = Math.max(-8, Math.min(8, offset * 3.5));
                const scale = Math.max(0.66, 1 - absOffset * 0.14);

                card.style.transform = `translate3d(${x}px, ${curveY}px, ${z}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
                card.style.opacity = absOffset > 2 ? '0' : String(Math.max(0.45, 1 - absOffset * 0.24));
                card.style.zIndex = String(20 - absOffset);
                card.style.pointerEvents = absOffset <= 2 ? 'auto' : 'none';
            }
        });

        if (sliderCounter) {
            sliderCounter.textContent = `${String(currentSlideIdx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
        }

        if (sliderDotsContainer) {
            sliderDotsContainer.innerHTML = visibleCards
                .map((_, i) => `<button type="button" class="slider-dot ${i === currentSlideIdx ? 'active' : ''}" data-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`)
                .join('');
        }
    }

    function applyProjectFilters() {
        visibleCards = [];
        allShowcaseCards.forEach(card => {
            const cat = card.getAttribute('data-cat');
            const grade = card.getAttribute('data-grade');
            const div = card.getAttribute('data-div');

            let match = false;
            if (activeCategory === 'all') {
                match = true;
            } else if (activeCategory === '3d') {
                const matchGrade = activeGrade === 'all' || grade === activeGrade;
                const matchDiv = activeDiv === 'all' || div === activeDiv;
                match = (cat === '3d') && matchGrade && matchDiv;
            } else if (activeCategory === '2d') {
                const matchGrade = activeGrade === 'all' || grade === activeGrade;
                match = (cat === '2d') && matchGrade;
            } else if (activeCategory === 'multimedia') {
                match = (cat === 'multimedia');
            }

            card.classList.toggle('filtered-out', !match);
            if (match) {
                visibleCards.push(card);
            }
        });

        currentSlideIdx = 0;
        renderShowcaseSlider();
    }

    primaryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            primaryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.getAttribute('data-cat');

            // Reset sub-filter pills ke 'all' setiap ganti kategori utama
            activeGrade = 'all';
            activeDiv = 'all';
            document.querySelectorAll('#filter-grade .filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
            document.querySelectorAll('#filter-div .filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));

            if (activeCategory === '3d') {
                if (subFilterPanel) subFilterPanel.classList.remove('hidden');
                if (filterGradeRow) filterGradeRow.classList.remove('hidden');
                if (filterDivRow) filterDivRow.classList.remove('hidden');
            } else if (activeCategory === '2d') {
                if (subFilterPanel) subFilterPanel.classList.remove('hidden');
                if (filterGradeRow) filterGradeRow.classList.remove('hidden');
                if (filterDivRow) filterDivRow.classList.add('hidden');
            } else {
                if (subFilterPanel) subFilterPanel.classList.add('hidden');
            }

            applyProjectFilters();
        });
    });

    document.querySelectorAll('#filter-grade .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#filter-grade .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeGrade = btn.getAttribute('data-val');
            applyProjectFilters();
        });
    });

    document.querySelectorAll('#filter-div .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#filter-div .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeDiv = btn.getAttribute('data-val');
            applyProjectFilters();
        });
    });

    // Klik kartu samping -> geser kartu tersebut ke tengah
    allShowcaseCards.forEach(card => {
        card.addEventListener('click', () => {
            const visibleIdx = visibleCards.indexOf(card);
            if (visibleIdx !== -1 && visibleIdx !== currentSlideIdx) {
                currentSlideIdx = visibleIdx;
                renderShowcaseSlider();
            }
        });
    });

    if (sliderPrevBtn) {
        sliderPrevBtn.addEventListener('click', () => {
            currentSlideIdx = (currentSlideIdx - 1 + visibleCards.length) % visibleCards.length;
            renderShowcaseSlider();
        });
    }

    if (sliderNextBtn) {
        sliderNextBtn.addEventListener('click', () => {
            currentSlideIdx = (currentSlideIdx + 1) % visibleCards.length;
            renderShowcaseSlider();
        });
    }

    if (sliderDotsContainer) {
        sliderDotsContainer.addEventListener('click', (e) => {
            const dot = e.target.closest('[data-slide-to]');
            if (dot) {
                currentSlideIdx = parseInt(dot.getAttribute('data-slide-to'), 10);
                renderShowcaseSlider();
            }
        });
    }

    // Drag / Swipe & Horizontal Wheel pada 3D Slider
    if (showcaseTrack) {
        let dragStartX = 0;
        let isTrackDragging = false;

        showcaseTrack.addEventListener('pointerdown', (e) => {
            isTrackDragging = true;
            dragStartX = e.clientX;
        });

        showcaseTrack.addEventListener('pointerup', (e) => {
            if (!isTrackDragging) return;
            isTrackDragging = false;
            const diffX = e.clientX - dragStartX;
            if (Math.abs(diffX) > 45) {
                if (diffX < 0) {
                    currentSlideIdx = (currentSlideIdx + 1) % visibleCards.length;
                } else {
                    currentSlideIdx = (currentSlideIdx - 1 + visibleCards.length) % visibleCards.length;
                }
                renderShowcaseSlider();
            }
        });

        let wheelLock = false;
        showcaseTrack.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > 15 || e.shiftKey) {
                e.preventDefault();
                if (wheelLock) return;
                wheelLock = true;
                const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                if (delta > 0) {
                    currentSlideIdx = (currentSlideIdx + 1) % visibleCards.length;
                } else {
                    currentSlideIdx = (currentSlideIdx - 1 + visibleCards.length) % visibleCards.length;
                }
                renderShowcaseSlider();
                setTimeout(() => { wheelLock = false; }, 320);
            }
        }, { passive: false });
    }

    window.addEventListener('resize', renderShowcaseSlider);
    renderShowcaseSlider();

    // =========================================================================
    // 8. COPY EMAIL BUTTON (CONTACT PAGE)
    // =========================================================================
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = copyEmailBtn.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                const originalText = copyEmailBtn.textContent;
                copyEmailBtn.textContent = '✓ Email Tersalin!';
                setTimeout(() => {
                    copyEmailBtn.textContent = originalText;
                }, 2000);
            });
        });
    }
});
