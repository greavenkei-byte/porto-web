(function() {
    try {
        const savedTheme = localStorage.getItem('gkp_theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 0. WEB AUDIO API — TACTILE UI SOUND EFFECTS ENGINE
    // =========================================================================
    const SoundFX = (() => {
        let ctx = null;
        let isMuted = false;

        try {
            isMuted = localStorage.getItem('gkp_sound') === 'muted';
        } catch (e) {}

        function getContext() {
            if (!ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) ctx = new AudioCtx();
            }
            if (ctx && ctx.state === 'suspended') {
                ctx.resume().catch(() => {});
            }
            return ctx;
        }

        function playHover() {
            if (isMuted) return;
            const audio = getContext();
            if (!audio) return;

            const now = audio.currentTime;
            const osc = audio.createOscillator();
            const gain = audio.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(620, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.035);

            gain.gain.setValueAtTime(0.025, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

            osc.connect(gain);
            gain.connect(audio.destination);

            osc.start(now);
            osc.stop(now + 0.04);
        }

        function playClick() {
            if (isMuted) return;
            const audio = getContext();
            if (!audio) return;

            const now = audio.currentTime;
            const osc = audio.createOscillator();
            const gain = audio.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(340, now);
            osc.frequency.exponentialRampToValueAtTime(120, now + 0.07);

            gain.gain.setValueAtTime(0.09, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

            osc.connect(gain);
            gain.connect(audio.destination);

            osc.start(now);
            osc.stop(now + 0.08);
        }

        function playWhoosh() {
            if (isMuted) return;
            const audio = getContext();
            if (!audio) return;

            const now = audio.currentTime;
            const bufferSize = audio.sampleRate * 0.28;
            const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
            }

            const noise = audio.createBufferSource();
            noise.buffer = buffer;

            const filter = audio.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(280, now);
            filter.frequency.exponentialRampToValueAtTime(950, now + 0.14);
            filter.frequency.exponentialRampToValueAtTime(320, now + 0.28);
            filter.Q.value = 1.8;

            const gain = audio.createGain();
            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audio.destination);

            noise.start(now);
        }

        function playFlip() {
            if (isMuted) return;
            const audio = getContext();
            if (!audio) return;

            const now = audio.currentTime;
            const osc = audio.createOscillator();
            const gain = audio.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(240, now);
            osc.frequency.exponentialRampToValueAtTime(520, now + 0.14);

            gain.gain.setValueAtTime(0.06, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

            osc.connect(gain);
            gain.connect(audio.destination);

            osc.start(now);
            osc.stop(now + 0.16);
        }

        function playSuccess() {
            if (isMuted) return;
            const audio = getContext();
            if (!audio) return;

            const now = audio.currentTime;
            const notes = [587.33, 880]; // D5 -> A5

            notes.forEach((freq, idx) => {
                const osc = audio.createOscillator();
                const gain = audio.createGain();
                const start = now + idx * 0.08;

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, start);

                gain.gain.setValueAtTime(0.07, start);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);

                osc.connect(gain);
                gain.connect(audio.destination);

                osc.start(start);
                osc.stop(start + 0.23);
            });
        }

        return {
            get muted() { return isMuted; },
            toggle() {
                isMuted = !isMuted;
                try {
                    localStorage.setItem('gkp_sound', isMuted ? 'muted' : 'on');
                } catch (e) {}
                if (!isMuted) playClick();
                return isMuted;
            },
            hover: playHover,
            click: playClick,
            whoosh: playWhoosh,
            flip: playFlip,
            success: playSuccess
        };
    })();

    // Auto-bind hover & click sound pada elemen interaktif
    let lastHoveredEl = null;
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button, .branch-btn, .filter-btn, .social-box, .nav-project-card');
        if (target && target !== lastHoveredEl) {
            lastHoveredEl = target;
            SoundFX.hover();
        } else if (!target) {
            lastHoveredEl = null;
        }
    }, { passive: true });

    document.addEventListener('click', (e) => {
        const target = e.target.closest('button, .branch-btn, .filter-btn, .btn-primary, .btn-secondary, .btn-cv, .btn-cta-light, .btn-cta-outline, .social-box');
        if (target && !target.classList.contains('sound-toggle-btn') && target.id !== 'flip-card-btn' && target.id !== 'copy-email-btn') {
            SoundFX.click();
        }
    });

    // 0A. TOP SCROLL PROGRESS BAR
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }

    // 0B. PAGE TRANSITION CURTAIN & PRELOADER
    const pageTransition = document.getElementById('page-transition');
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');

    let alreadyVisited = false;
    try {
        alreadyVisited = sessionStorage.getItem('gkp_visited') === 'true';
    } catch (e) {}

    function closePreloader() {
        if (!preloader) return;
        preloader.classList.add('slide-up');
        try {
            sessionStorage.setItem('gkp_visited', 'true');
        } catch (e) {}
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 850);
    }

    if (preloader) {
        if (alreadyVisited) {
            preloader.classList.add('hidden');
            if (pageTransition) {
                setTimeout(() => pageTransition.classList.add('is-loaded'), 120);
            }
        } else {
            if (pageTransition) pageTransition.classList.add('is-loaded');
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 8) + 5;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    if (loaderBar) loaderBar.style.width = '100%';
                    if (loaderPercent) loaderPercent.textContent = '100%';
                    setTimeout(closePreloader, 250);
                } else {
                    if (loaderBar) loaderBar.style.width = progress + '%';
                    if (loaderPercent) loaderPercent.textContent = String(progress).padStart(3, '0') + '%';
                }
            }, 30);

            setTimeout(() => {
                clearInterval(interval);
                closePreloader();
            }, 2200);
        }
    }

    // 0C. SOUND & DARK/LIGHT MODE TOGGLE DI NAVBAR & MOBILE MENU
    const sunIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const soundOnIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    const soundOffIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;

    const navContainer = document.querySelector('.nav-container');
    const btnCv = navContainer ? navContainer.querySelector('.btn-cv') : null;
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const soundBtn = document.createElement('button');
    soundBtn.type = 'button';
    soundBtn.className = 'sound-toggle-btn';
    soundBtn.setAttribute('aria-label', 'Aktifkan / Matikan Efek Suara');

    const themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.setAttribute('aria-label', 'Ganti Mode Terang / Gelap');

    let mobileThemeLink = null;
    let mobileSoundLink = null;

    if (mobileMenu) {
        mobileSoundLink = document.createElement('a');
        mobileSoundLink.href = '#';
        mobileSoundLink.addEventListener('click', (e) => {
            e.preventDefault();
            SoundFX.toggle();
            updateSoundUI();
        });
        mobileMenu.appendChild(mobileSoundLink);

        mobileThemeLink = document.createElement('a');
        mobileThemeLink.href = '#';
        mobileThemeLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
        mobileMenu.appendChild(mobileThemeLink);
    }

    function updateSoundUI() {
        const muted = SoundFX.muted;
        soundBtn.innerHTML = muted ? soundOffIcon : soundOnIcon;
        soundBtn.classList.toggle('is-muted', muted);
        if (mobileSoundLink) {
            mobileSoundLink.textContent = muted ? '🔇 Efek Suara: Mati (Muted)' : '🔊 Efek Suara: Aktif';
        }
    }

    function updateThemeUI() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        themeBtn.innerHTML = isDark ? sunIcon : moonIcon;
        if (mobileThemeLink) {
            mobileThemeLink.textContent = isDark ? '☀ Mode Terang (Light)' : '☾ Mode Gelap (Dark)';
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';
        if (nextTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        try {
            localStorage.setItem('gkp_theme', nextTheme);
        } catch (e) {}
        updateThemeUI();
    }

    soundBtn.addEventListener('click', () => {
        SoundFX.toggle();
        updateSoundUI();
    });

    themeBtn.addEventListener('click', toggleTheme);

    if (navContainer) {
        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'nav-actions';
        actionsWrap.appendChild(soundBtn);
        actionsWrap.appendChild(themeBtn);
        if (btnCv) actionsWrap.appendChild(btnCv);
        if (hamburgerBtn) actionsWrap.appendChild(hamburgerBtn);
        navContainer.appendChild(actionsWrap);
    }

    updateSoundUI();
    updateThemeUI();

    function setMobileMenuState(isOpen) {
        if (!mobileMenu || !hamburgerBtn) return;
        mobileMenu.classList.toggle('active', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    }

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const nextState = !mobileMenu.classList.contains('active');
            setMobileMenuState(nextState);
        });
    }

    // FLOATING BACK TO TOP BUTTON
    const bttBtn = document.createElement('button');
    bttBtn.type = 'button';
    bttBtn.className = 'back-to-top-btn';
    bttBtn.setAttribute('aria-label', 'Kembali ke Atas');
    bttBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
    document.body.appendChild(bttBtn);

    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 1. SCROLL REVEAL & VERTICAL TIMELINE PROGRESS (CONSOLIDATED & THROTTLED)
    const revealEls = document.querySelectorAll('.reveal');
    let revealObserver = null;

    function refreshReveals() {
        if ('IntersectionObserver' in window) {
            if (revealObserver) revealObserver.disconnect();
            revealObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.08,
                rootMargin: '0px 0px -20px 0px'
            });

            revealEls.forEach(el => {
                if (!el.classList.contains('visible')) {
                    revealObserver.observe(el);
                }
            });
        } else {
            revealEls.forEach(el => el.classList.add('visible'));
        }
    }

    refreshReveals();

    const timeline = document.getElementById('process-timeline');
    const timelineProgress = document.getElementById('timeline-progress');

    function updateTimelineProgress() {
        if (!timeline || !timelineProgress) return;
        const rect = timeline.getBoundingClientRect();
        if (rect.height === 0) return;
        const windowHeight = window.innerHeight;
        const scrolled = Math.min(Math.max(windowHeight * 0.65 - rect.top, 0), rect.height);
        timelineProgress.style.height = `${(scrolled / rect.height) * 100}%`;
    }

    function checkBottomReveals() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12) {
            document.querySelectorAll('.page-view.active .reveal, .footer.reveal').forEach(el => {
                el.classList.add('visible');
            });
        }
    }

    const profPanel = document.getElementById('proficiency-panel');
    let profAnimated = false;

    function runProficiencyAnimation() {
        if (!profPanel || profAnimated) return;
        profAnimated = true;

        const items = profPanel.querySelectorAll('.prof-item');
        items.forEach((item, idx) => {
            const target = parseInt(item.getAttribute('data-target'), 10) || 0;
            const fill = item.querySelector('.prof-fill');
            const pctText = item.querySelector('.prof-pct');

            setTimeout(() => {
                if (fill) fill.style.width = `${target}%`;

                let current = 0;
                const duration = 1300;
                const stepTime = 20;
                const increment = target / (duration / stepTime);

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }
                    if (pctText) pctText.textContent = `${Math.round(current)}%`;
                }, stepTime);
            }, idx * 120);
        });
    }

    function checkProficiencyVisible() {
        if (!profPanel || profAnimated || currentActivePage !== 'about') return;
        const rect = profPanel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
            runProficiencyAnimation();
        }
    }

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateScrollProgress();
                bttBtn.classList.toggle('show', window.scrollY > 360);
                updateTimelineProgress();
                checkBottomReveals();
                checkProficiencyVisible();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    updateScrollProgress();

    // 2. DATA 15 KARYA & DYNAMIC PROJECT DETAIL LOADER
    const projectsData = [
        {
            id: 'anim-01',
            title: '3D Character Body Mechanics',
            category: '3D • Divisi Animation (Kelas 11)',
            year: '2026',
            role: '3D Animator',
            tools: 'Blender',
            client: 'Core Focus — Kelas 11',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi mekanika gerak karakter (walk cycle dan body mechanics) menggunakan Blender untuk melatih pemahaman terhadap prinsip animasi.',
            challenge: 'Menjaga konsistensi timing, spacing, dan perpindahan pusat gravitasi agar gerakan karakter terasa memiliki bobot dan natural.',
            steps: ['01 Referensi', '02 Blocking', '03 Spline', '04 Render'],
            result: 'Menghasilkan siklus gerakan karakter yang halus dengan kurva Graph Editor yang bersih.'
        },
        {
            id: 'anim-02',
            title: '3D Logo Bumper — Forum BKK Jatim',
            category: '3D • Divisi Animation (Kelas 11)',
            year: '2026',
            role: '3D Animator & Motion Designer',
            tools: 'Blender, After Effects',
            client: 'Forum BKK Jawa Timur',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Produksi video bumper pembuka 3D resmi dan aset visual promosi untuk acara regional Forum Bursa Kerja Khusus (BKK) Jawa Timur.',
            challenge: 'Menyelaraskan pergerakan kamera 3D dengan aksen suara dalam durasi singkat agar terlihat megah dan profesional.',
            steps: ['01 Konsep', '02 Camera Anim', '03 Lighting', '04 Compositing'],
            result: 'Bumper 3D beresolusi tinggi yang digunakan sebagai pembuka resmi rangkaian acara.'
        },
        {
            id: 'anim-03',
            title: '3D Character Acting & Expression',
            category: '3D • Divisi Animation (Kelas 11)',
            year: '2026',
            role: '3D Character Animator',
            tools: 'Autodesk Maya, Blender',
            client: 'Core Focus — Kelas 11',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Latihan akting karakter, gestur tangan, dan ekspresi wajah menggunakan rig karakter anime/stylized.',
            challenge: 'Menyampaikan emosi karakter hanya melalui siluet pose tubuh dan pergerakan mata sebelum dialog masuk.',
            steps: ['01 Video Ref', '02 Key Poses', '03 Facial Pass', '04 Polish'],
            result: 'Klip akting karakter ekspresif dengan pose yang terbaca jelas.'
        },
        {
            id: 'anim-04',
            title: '3D Dynamic Action & Camera Cut',
            category: '3D • Divisi Animation (Kelas 11)',
            year: '2026',
            role: '3D Animator',
            tools: 'Blender',
            client: 'Core Focus — Kelas 11',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
            desc: 'Koreografi gerak cepat dengan pergantian sudut kamera sinematik dan efek aksentuasi gerak.',
            challenge: 'Menjaga orientasi penonton saat kamera berpindah sudut dalam tempo cepat.',
            steps: ['01 Storyboard', '02 Camera Block', '03 Action Timing', '04 Render'],
            result: 'Sekuens aksi 3D yang enerjik dengan ritme kamera dinamis.'
        },
        {
            id: 'anim-10-1',
            title: '3D Walk Cycle & Physics Timing',
            category: '3D • Divisi Animation (Kelas 10)',
            year: '2025',
            role: '3D Animator',
            tools: 'Blender',
            client: 'Fondasi Jurusan Animasi Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
            desc: 'Fondasi animasi 3D kelas 10: siklus langkah kaki dan simulasi berat benda (pendulum & ball).',
            challenge: 'Memahami kurva F-Curve dan menjaga kontak kaki tetap menempel kuat pada lantai.',
            steps: ['01 Contact Pose', '02 Passing Pose', '03 In-Between', '04 Loop'],
            result: 'Animasi dasar yang menjadi fondasi lompatan skill di kelas 11.'
        },
        {
            id: '2d-10-1',
            title: '2D 12 Principles of Animation',
            category: '2D • Divisi Animation (Kelas 10)',
            year: '2025',
            role: '2D Animator',
            tools: 'Adobe After Effects',
            client: 'Tugas Animasi Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
            desc: 'Penerapan squash & stretch, anticipation, dan follow-through pada animasi 2D dasar.',
            challenge: 'Mengatur kurva kecepatan (easy ease) agar gerak terasa elastis dan tidak kaku.',
            steps: ['01 Sketch', '02 Keyframe', '03 Speed Graph', '04 Export'],
            result: 'Klip studi prinsip dasar animasi 2D.'
        },
        {
            id: '2d-10-2',
            title: '2D Motion Graphics & Typography',
            category: '2D • Divisi Animation (Kelas 10)',
            year: '2025',
            role: 'Motion Designer',
            tools: 'Adobe After Effects',
            client: 'Tugas Animasi Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
            desc: 'Eksplorasi transisi bentuk geometris dan tipografi dinamis sinkron dengan ketukan musik.',
            challenge: 'Menjaga keterbacaan teks di tengah transisi bentuk yang cepat.',
            steps: ['01 Layout', '02 Masking', '03 Audio Sync', '04 Render'],
            result: 'Video motion graphics pembuka bergaya modern.'
        },
        {
            id: 'mod-10-1',
            title: '3D Hard Surface & Prop Modeling',
            category: '3D • Divisi Modeling (Kelas 10)',
            year: '2025',
            role: '3D Modeler (Arsip Kls 10)',
            tools: 'Blender',
            client: 'Arsip Modeling Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip kelas 10: pembentukan objek mekanik, pengaturan bevel, dan topologi quad bersih.',
            challenge: 'Menghindari pinching pada permukaan lengkung dengan mengatur edge loop yang rapi.',
            steps: ['01 Blockout', '02 Edge Loop', '03 Shading', '04 Turntable'],
            result: 'Aset 3D prop bersih sebagai bagian dari pembelajaran dasar di kelas 10.'
        },
        {
            id: 'mod-10-2',
            title: '3D Isometric Room Environment',
            category: '3D • Divisi Modeling (Kelas 10)',
            year: '2025',
            role: '3D Modeler (Arsip Kls 10)',
            tools: 'Blender, Autodesk Maya',
            client: 'Arsip Modeling Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip kelas 10: pemodelan interior ruangan miniatur lengkap dengan pencahayaan studio hangat.',
            challenge: 'Menata komposisi puluhan objek kecil agar terlihat harmonis dalam satu bingkai isometrik.',
            steps: ['01 Room Shell', '02 Furniture', '03 Warm Light', '04 Cycles Render'],
            result: 'Render lingkungan ruangan 3D isometrik.'
        },
        {
            id: 'mod-10-3',
            title: '3D Stylized Asset & UV Mapping',
            category: '3D • Divisi Modeling (Kelas 10)',
            year: '2025',
            role: '3D Modeler (Arsip Kls 10)',
            tools: 'Autodesk Maya',
            client: 'Arsip Modeling Kelas 10',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
            desc: 'Arsip kelas 10: latihan modeling aset bergaya stylized dan pemetaan UV dasar di Maya.',
            challenge: 'Memotong UV seam secara rapi agar tekstur tidak tertarik.',
            steps: ['01 Base Mesh', '02 Sculpt/Detail', '03 UV Unwrap', '04 Render'],
            result: 'Aset 3D siap pakai sebelum fokus penuh beralih ke divisi animasi di kelas 11.'
        },
        {
            id: 'mulmed-01',
            title: 'After Movie & Event Recap OSIS',
            category: 'Multimedia • Editing & Videografi',
            year: '2026',
            role: 'Ketua Sekbid 9 & Video Editor',
            tools: 'CapCut, Adobe After Effects',
            client: 'OSIS SMKN 4 Madiun',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
            desc: 'Penyuntingan video dokumentasi acara besar sekolah dan koordinasi tim liputan OSIS.',
            challenge: 'Menggabungkan berbagai rekaman kamera siswa menjadi alur cerita yang energik dalam waktu singkat.',
            steps: ['01 Liputan', '02 Seleksi Klip', '03 Beat Sync', '04 Color Grade'],
            result: 'Video rekap resmi yang dipublikasikan di kanal media sosial sekolah.'
        },
        {
            id: 'mulmed-02',
            title: 'Bertugas Liputan & Publikasi OSIS',
            category: 'Multimedia • Dokumentasi Lapangan',
            year: '2026',
            role: 'Ketua Sekbid 9 (Media & TIK)',
            tools: 'Kamera DSLR/Mirrorless, CapCut',
            client: 'OSIS SMKN 4 Madiun',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
            desc: 'Momen bertugas di lapangan mengabadikan kegiatan siswa dan mengelola konten media sosial resmi.',
            challenge: 'Menangkap momen krusial panggung secara spontan dalam kondisi pencahayaan berubah-ubah.',
            steps: ['01 Briefing Tim', '02 Fotografi Event', '03 Kurasi Foto', '04 Publikasi'],
            result: 'Arsip dokumentasi visual rapi untuk seluruh program kerja OSIS.'
        },
        {
            id: 'mulmed-03',
            title: 'Tim Mulmed & Visual Switcher',
            category: 'Multimedia • Live Streaming',
            year: '2025 - 2026',
            role: 'Visual Switcher Operator',
            tools: 'Video Switcher, OBS Studio',
            client: 'Tim Multimedia Gereja',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
            desc: 'Bertugas mengoperasikan visual switcher dan pengaturan transisi siaran langsung multi-kamera.',
            challenge: 'Menjaga kelancaran perpindahan kamera secara real-time tanpa jeda selama siaran langsung.',
            steps: ['01 Cek Sinyal', '02 Koordinasi Cam', '03 Live Switching', '04 Monitoring'],
            result: 'Tayangan siaran langsung yang stabil dan enak ditonton.'
        },
        {
            id: 'mulmed-04',
            title: 'Cameraman Utama Tim Multimedia',
            category: 'Multimedia • Videografi',
            year: '2025 - 2026',
            role: 'Cameraman / Videografer',
            tools: 'Kamera Broadcast & Tripod Fluid Head',
            client: 'Tim Multimedia Gereja',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
            desc: 'Pengambilan sudut gambar dinamis dan menjaga komposisi visual selama acara berlangsung.',
            challenge: 'Menjaga pergerakan panning dan zooming tetap halus sepanjang durasi acara.',
            steps: ['01 Setup Rig', '02 Framing', '03 Live Shoot', '04 Wrap'],
            result: 'Rekaman kamera jernih dan stabil untuk siaran langsung maupun arsip.'
        },
        {
            id: 'mulmed-05',
            title: 'Freelance Camera & Video Editing',
            category: 'Multimedia • Freelance Project',
            year: '2025 - 2026',
            role: 'Freelance Videographer & Editor',
            tools: 'CapCut, KineMaster, After Effects',
            client: 'Klien Independen',
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
            desc: 'Mengerjakan perekaman lapangan, operator rekaman, hingga editing video promosi untuk klien.',
            challenge: 'Menyesuaikan gaya penyuntingan dengan kebutuhan spesifik masing-masing klien secara tepat waktu.',
            steps: ['01 Brief Klien', '02 Shooting', '03 Editing & Revisi', '04 Delivery'],
            result: 'Hasil video komersial dan dokumentasi yang memuaskan klien.'
        }
    ];

    function loadProjectDetail(projectId) {
        const currentIndex = projectsData.findIndex(p => p.id === projectId);
        const safeIndex = currentIndex !== -1 ? currentIndex : 0;
        const project = projectsData[safeIndex];

        const prevIndex = (safeIndex - 1 + projectsData.length) % projectsData.length;
        const nextIndex = (safeIndex + 1) % projectsData.length;
        const prevProject = projectsData[prevIndex];
        const nextProject = projectsData[nextIndex];

        document.getElementById('dt-cat-year').textContent = `${project.category} • ${project.year}`;
        document.getElementById('dt-title').textContent = project.title;

        const videoEl = document.getElementById('dt-video');
        videoEl.setAttribute('poster', project.posterUrl);
        document.getElementById('dt-video-src').setAttribute('src', project.videoUrl);
        videoEl.load();

        document.getElementById('dt-desc').textContent = project.desc;
        document.getElementById('dt-challenge').textContent = project.challenge;
        document.getElementById('dt-result').textContent = project.result;

        document.getElementById('dt-steps').innerHTML = project.steps
            .map(step => `<span class="step-pill">${step}</span>`)
            .join('');

        document.getElementById('info-year').textContent = project.year;
        document.getElementById('info-cat').textContent = project.category;
        document.getElementById('info-role').textContent = project.role;
        document.getElementById('info-tools').textContent = project.tools;
        document.getElementById('info-client').textContent = project.client;

        const prevBtn = document.getElementById('nav-prev');
        const nextBtn = document.getElementById('nav-next');

        prevBtn.href = `#project-detail?id=${prevProject.id}`;
        prevBtn.setAttribute('data-project-id', prevProject.id);
        document.getElementById('prev-title').textContent = prevProject.title;

        nextBtn.href = `#project-detail?id=${nextProject.id}`;
        nextBtn.setAttribute('data-project-id', nextProject.id);
        document.getElementById('next-title').textContent = nextProject.title;
    }

    // 3. SINGLE-PAGE VIEW ROUTER
    const views = {
        home: document.getElementById('view-home'),
        about: document.getElementById('view-about'),
        projects: document.getElementById('view-projects'),
        'project-detail': document.getElementById('view-project-detail'),
        experience: document.getElementById('view-experience'),
        contact: document.getElementById('view-contact')
    };

    let currentActivePage = 'home';

    function activateView(pageName, projectId = null, updateHash = true) {
        if (!views[pageName]) pageName = 'home';
        currentActivePage = pageName;

        document.querySelectorAll('video').forEach(v => {
            if (!v.classList.contains('hero-bg-video')) {
                v.pause();
            }
        });

        Object.entries(views).forEach(([key, el]) => {
            if (!el) return;
            el.classList.toggle('active', key === pageName);
        });

        const navHighlight = pageName === 'project-detail' ? 'projects' : pageName;
        document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
            a.classList.toggle('active', a.getAttribute('data-page') === navHighlight);
        });

        if (pageName === 'project-detail') {
            loadProjectDetail(projectId || 'anim-01');
        }

        if (updateHash) {
            const newHash = pageName === 'project-detail'
                ? `#project-detail?id=${projectId || 'anim-01'}`
                : `#${pageName}`;
            if (window.location.hash !== newHash) {
                history.pushState(null, '', newHash);
            }
        }

        window.scrollTo({ top: 0, behavior: 'instant' });
        updateScrollProgress();
        refreshReveals();

        if (pageName === 'about') {
            checkProficiencyVisible();
        }
    }

    function transitionToPage(pageName, projectId = null) {
        setMobileMenuState(false);
        SoundFX.whoosh();

        if (pageTransition) {
            pageTransition.classList.remove('is-loaded');
            pageTransition.classList.add('is-leaving');

            setTimeout(() => {
                activateView(pageName, projectId, true);
                requestAnimationFrame(() => {
                    pageTransition.classList.remove('is-leaving');
                    pageTransition.classList.add('is-loaded');
                });
            }, 460);
        } else {
            activateView(pageName, projectId, true);
        }
    }

    document.addEventListener('click', (e) => {
        const projectLink = e.target.closest('a[data-project-id]');
        if (projectLink) {
            e.preventDefault();
            const pid = projectLink.getAttribute('data-project-id');
            transitionToPage('project-detail', pid);
            return;
        }

        const pageLink = e.target.closest('a[data-page]');
        if (pageLink) {
            e.preventDefault();
            const targetPage = pageLink.getAttribute('data-page');
            if (targetPage === currentActivePage && targetPage !== 'project-detail') {
                setMobileMenuState(false);
                SoundFX.click();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            transitionToPage(targetPage);
        }
    });

    function parseHashAndLoad() {
        const rawHash = window.location.hash.replace(/^#/, '');
        if (!rawHash || rawHash === 'showreel-sec') {
            activateView('home', null, false);
            return;
        }
        if (rawHash.startsWith('project-detail')) {
            const queryPart = rawHash.split('?')[1] || '';
            const params = new URLSearchParams(queryPart);
            activateView('project-detail', params.get('id') || 'anim-01', false);
            return;
        }
        if (views[rawHash]) {
            activateView(rawHash, null, false);
        } else {
            activateView('home', null, false);
        }
    }

    window.addEventListener('popstate', parseHashAndLoad);
    parseHashAndLoad();

    document.addEventListener('keydown', (e) => {
        const previewModal = document.getElementById('preview-modal');
        if (previewModal && previewModal.classList.contains('open')) return;
        if (currentActivePage !== 'project-detail') return;

        if (e.key === 'ArrowLeft') {
            const prevBtn = document.getElementById('nav-prev');
            if (prevBtn) prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            const nextBtn = document.getElementById('nav-next');
            if (nextBtn) nextBtn.click();
        }
    });

    // 5. SPRING PHYSICS DRAGGABLE & 2-SIDED FLIP ID CARD (ABOUT PAGE)
    const idCard = document.getElementById('physics-id-card');
    const lanyardSvgLine = document.getElementById('lanyard-dynamic-line');
    const flipBtn = document.getElementById('flip-card-btn');

    if (idCard) {
        let isDragging = false;
        let isFlipped = false;
        let startX = 0, startY = 0;
        let posX = 0, posY = 0;
        let velX = 0, velY = 0;

        const stiffness = 0.08;
        const damping = 0.82;

        if (flipBtn) {
            flipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                isFlipped = !isFlipped;
                SoundFX.flip();
            });
        }

        const onPointerDown = (e) => {
            if (e.target.closest('#flip-card-btn')) return;
            isDragging = true;
            idCard.style.cursor = 'grabbing';
            SoundFX.click();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startX = clientX - posX;
            startY = clientY - posY;
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const maxDragX = Math.min(130, Math.max(40, (window.innerWidth - 280) / 2));
            posX = Math.max(-maxDragX, Math.min(maxDragX, clientX - startX));
            posY = Math.max(-60, Math.min(130, clientY - startY));
        };

        const onPointerUp = () => {
            if (!isDragging) return;
            isDragging = false;
            idCard.style.cursor = 'grab';
        };

        idCard.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);

        idCard.addEventListener('touchstart', onPointerDown, { passive: true });
        window.addEventListener('touchmove', onPointerMove, { passive: true });
        window.addEventListener('touchend', onPointerUp);

        let time = 0;
        function animateCard() {
            if (currentActivePage === 'about') {
                time += 0.03;
                if (!isDragging) {
                    const idleX = Math.sin(time) * 4;
                    const forceX = (idleX - posX) * stiffness;
                    const forceY = (0 - posY) * stiffness;
                    velX = (velX + forceX) * damping;
                    velY = (velY + forceY) * damping;
                    posX += velX;
                    posY += velY;
                }

                const tiltZ = posX * 0.14;
                const tiltX = -posY * 0.12;
                const flipAngle = isFlipped ? 180 : 0;

                idCard.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotateZ(${tiltZ}deg) rotateX(${tiltX}deg) rotateY(${flipAngle}deg)`;

                if (lanyardSvgLine) {
                    const endX = 160 + posX;
                    const endY = 88 + posY;
                    const ctrlX = 160 + posX * 0.45;
                    const ctrlY = 35 + posY * 0.35;
                    lanyardSvgLine.setAttribute('d', `M 160 -20 Q ${ctrlX} ${ctrlY} ${endX} ${endY}`);

                    const clasp = document.getElementById('lanyard-clasp');
                    if (clasp) {
                        clasp.setAttribute('transform', `translate(${endX}, ${endY}) rotate(${tiltZ})`);
                    }
                }
            }

            requestAnimationFrame(animateCard);
        }
        animateCard();
    }

    // 6. HIERARCHICAL PROJECTS FILTER (15 WORKS)
    const branchBtns = document.querySelectorAll('.branch-btn');
    const panel2d3d = document.getElementById('panel-2d3d');
    const panelMulmed = document.getElementById('panel-mulmed');
    const allProjectCards = document.querySelectorAll('.project-card');
    const emptyMsg = document.getElementById('empty-filter-msg');

    if (branchBtns.length > 0 && allProjectCards.length > 0) {
        let state = {
            branch: '2d3d',
            dim: 'all',
            grade: 'all',
            div: 'all',
            mulmed: 'all'
        };

        function applyProjectFilters() {
            let visibleCount = 0;

            allProjectCards.forEach(card => {
                const cBranch = card.getAttribute('data-branch');
                let match = false;

                if (state.branch === '2d3d' && cBranch === '2d3d') {
                    const mDim = state.dim === 'all' || card.getAttribute('data-dim') === state.dim;
                    const mGrade = state.grade === 'all' || card.getAttribute('data-grade') === state.grade;
                    const mDiv = state.div === 'all' || card.getAttribute('data-div') === state.div;
                    match = mDim && mGrade && mDiv;
                } else if (state.branch === 'mulmed' && cBranch === 'mulmed') {
                    match = state.mulmed === 'all' || card.getAttribute('data-mulmed') === state.mulmed;
                }

                if (match) {
                    card.classList.remove('hidden-card');
                    requestAnimationFrame(() => card.classList.add('visible'));
                    visibleCount++;
                } else {
                    card.classList.add('hidden-card');
                }
            });

            if (emptyMsg) {
                emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        }

        branchBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                branchBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.branch = btn.getAttribute('data-branch');

                if (state.branch === '2d3d') {
                    if (panel2d3d) panel2d3d.classList.remove('hidden');
                    if (panelMulmed) panelMulmed.classList.add('hidden');
                } else {
                    if (panel2d3d) panel2d3d.classList.add('hidden');
                    if (panelMulmed) panelMulmed.classList.remove('hidden');
                }
                applyProjectFilters();
            });
        });

        function bindPillGroup(containerId, stateKey) {
            const container = document.getElementById(containerId);
            if (!container) return;
            const pills = container.querySelectorAll('.filter-btn');
            pills.forEach(pill => {
                pill.addEventListener('click', () => {
                    pills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    state[stateKey] = pill.getAttribute('data-val');
                    applyProjectFilters();
                });
            });
        }

        bindPillGroup('filter-dim', 'dim');
        bindPillGroup('filter-grade', 'grade');
        bindPillGroup('filter-div', 'div');
        bindPillGroup('filter-mulmed', 'mulmed');

        applyProjectFilters();
    }

    // 7. QUICK PREVIEW MODAL (PREV / NEXT & KEYBOARD ESC / PANAH)
    const previewModal = document.getElementById('preview-modal');
    const modalMediaArea = document.getElementById('modal-media-area');
    const modalTitleText = document.getElementById('modal-title-text');
    const modalMetaText = document.getElementById('modal-meta-text');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');

    if (previewModal && modalMediaArea) {
        let visibleQuickBtns = [];
        let currentModalIdx = 0;

        function renderQuickPreview(btn) {
            if (!btn) return;
            const type = btn.getAttribute('data-type');
            const src = btn.getAttribute('data-src');
            const title = btn.getAttribute('data-title');
            const meta = btn.getAttribute('data-meta');

            if (type === 'video') {
                modalMediaArea.innerHTML = `<video controls autoplay playsinline><source src="${src}" type="video/mp4"></video>`;
            } else {
                modalMediaArea.innerHTML = `<img src="${src}" alt="${title}">`;
            }
            if (modalTitleText) modalTitleText.textContent = title;
            if (modalMetaText) modalMetaText.textContent = meta;
        }

        document.querySelectorAll('.btn-quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                visibleQuickBtns = Array.from(document.querySelectorAll('.project-card:not(.hidden-card) .btn-quick-view'));
                currentModalIdx = visibleQuickBtns.indexOf(btn);

                renderQuickPreview(btn);
                previewModal.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });

        function closePreviewModal() {
            previewModal.classList.remove('open');
            modalMediaArea.innerHTML = '';
            document.body.style.overflow = '';
        }

        if (modalPrevBtn) {
            modalPrevBtn.addEventListener('click', () => {
                if (visibleQuickBtns.length === 0) return;
                currentModalIdx = (currentModalIdx - 1 + visibleQuickBtns.length) % visibleQuickBtns.length;
                renderQuickPreview(visibleQuickBtns[currentModalIdx]);
            });
        }

        if (modalNextBtn) {
            modalNextBtn.addEventListener('click', () => {
                if (visibleQuickBtns.length === 0) return;
                currentModalIdx = (currentModalIdx + 1) % visibleQuickBtns.length;
                renderQuickPreview(visibleQuickBtns[currentModalIdx]);
            });
        }

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePreviewModal);
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closePreviewModal();
        });

        document.addEventListener('keydown', (e) => {
            if (!previewModal.classList.contains('open')) return;
            if (e.key === 'Escape') closePreviewModal();
            if (e.key === 'ArrowLeft' && modalPrevBtn) modalPrevBtn.click();
            if (e.key === 'ArrowRight' && modalNextBtn) modalNextBtn.click();
        });
    }

    // 8. ONE-CLICK COPY EMAIL + TOAST NOTIFICATION
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        let toastEl = document.getElementById('copy-toast');
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.id = 'copy-toast';
            toastEl.className = 'copy-toast';
            document.body.appendChild(toastEl);
        }

        let toastTimer = null;
        copyEmailBtn.addEventListener('click', async () => {
            const email = copyEmailBtn.getAttribute('data-email') || 'greaven.kei@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                SoundFX.success();
                toastEl.textContent = `Email ${email} berhasil disalin!`;
                toastEl.classList.add('show');
                clearTimeout(toastTimer);
                toastTimer = setTimeout(() => {
                    toastEl.classList.remove('show');
                }, 2500);
            } catch (err) {
                console.error('Gagal menyalin email:', err);
            }
        });
    }
});
