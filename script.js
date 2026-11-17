(function() {
    try {
        const savedTheme = localStorage.getItem('gkp_theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', () => {
    // 0. DARK / LIGHT MODE TOGGLE DI NAVBAR & MOBILE MENU
    const sunIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    const navContainer = document.querySelector('.nav-container');
    const btnCv = navContainer ? navContainer.querySelector('.btn-cv') : null;
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.setAttribute('aria-label', 'Ganti Mode Terang / Gelap');

    let mobileThemeLink = null;
    if (mobileMenu) {
        mobileThemeLink = document.createElement('a');
        mobileThemeLink.href = '#';
        mobileThemeLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
        mobileMenu.appendChild(mobileThemeLink);
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

    themeBtn.addEventListener('click', toggleTheme);

    if (navContainer) {
        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'nav-actions';
        actionsWrap.appendChild(themeBtn);
        if (btnCv) actionsWrap.appendChild(btnCv);
        if (hamburgerBtn) actionsWrap.appendChild(hamburgerBtn);
        navContainer.appendChild(actionsWrap);
    }

    updateThemeUI();

    // 1. PRELOADER / OPENING SCREEN
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');

    function closePreloader() {
        if (!preloader) return;
        preloader.classList.add('slide-up');
        try {
            sessionStorage.setItem('gkp_visited', 'true');
        } catch (e) {}
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 900);
    }

    if (preloader) {
        let alreadyVisited = false;
        try {
            alreadyVisited = sessionStorage.getItem('gkp_visited') === 'true';
        } catch (e) {}

        if (alreadyVisited) {
            preloader.classList.add('hidden');
        } else {
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

    // 2. MOBILE HAMBURGER MENU
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // 3. SCROLL REVEAL & VERTICAL TIMELINE PROGRESS
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    const timeline = document.getElementById('process-timeline');
    const timelineProgress = document.getElementById('timeline-progress');

    if (timeline && timelineProgress) {
        window.addEventListener('scroll', () => {
            const rect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalHeight = rect.height;
            const scrolled = Math.min(Math.max(windowHeight * 0.65 - rect.top, 0), totalHeight);
            const percentage = (scrolled / totalHeight) * 100;
            timelineProgress.style.height = `${percentage}%`;
        });
    }

    // 4. SPRING PHYSICS DRAGGABLE & 2-SIDED FLIP ID CARD (ABOUT PAGE)
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
            });
        }

        const onPointerDown = (e) => {
            if (e.target.closest('#flip-card-btn')) return;
            isDragging = true;
            idCard.style.cursor = 'grabbing';
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startX = clientX - posX;
            startY = clientY - posY;
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            posX = Math.max(-130, Math.min(130, clientX - startX));
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

            requestAnimationFrame(animateCard);
        }
        animateCard();
    }

    // 5. HIERARCHICAL PROJECTS FILTER (CABANG 2D/3D -> DIMENSI -> KELAS -> DIVISI & MULTIMEDIA)
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

    // 6. DYNAMIC PROJECT DETAIL PAGE & PREV/NEXT NAVIGATION
    const detailContainer = document.getElementById('project-detail-root');
    if (detailContainer) {
        const projectsData = [
            {
                id: 'anim-01',
                title: '3D Character Body Mechanics',
                category: '3D • Divisi Animation (Kelas 11)',
                year: '2026',
                role: '3D Animator',
                tools: 'Blender',
                client: 'Personal Study — Core Focus',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
                desc: 'Eksplorasi mekanika gerak karakter (walk cycle dan body mechanics) menggunakan Blender untuk melatih pemahaman terhadap prinsip animasi dasar.',
                challenge: 'Menjaga konsistensi timing, spacing, dan perpindahan pusat gravitasi (center of gravity) agar gerakan karakter terasa memiliki bobot dan natural.',
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
                steps: ['01 Konsep & Moodboard', '02 Camera Anim', '03 Lighting & Shader', '04 Compositing'],
                result: 'Bumper 3D beresolusi tinggi yang digunakan sebagai pembuka resmi rangkaian acara.'
            },
            {
                id: 'mod-10',
                title: '3D Prop & Hard Surface Study',
                category: '3D • Divisi Modeling (Kelas 10)',
                year: '2025',
                role: '3D Modeler (Study)',
                tools: 'Blender, Autodesk Maya',
                client: 'Tugas Jurusan Animasi Kelas 10',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80',
                desc: 'Latihan dasar pembangunan bentuk objek 3D, topologi bersih, serta pencahayaan dasar pada semester awal kelas 10.',
                challenge: 'Memahami alur kerja mesh dan menjaga proporsi objek agar siap digunakan dalam adegan animasi.',
                steps: ['01 Blocking Bentuk', '02 Detail & Bevel', '03 Shading', '04 Render'],
                result: 'Aset 3D prop sederhana sebagai fondasi sebelum memfokuskan diri ke divisi animasi.'
            },
            {
                id: '2d-10',
                title: '2D Principles & Motion Graphics',
                category: '2D • Divisi Animation (Kelas 10)',
                year: '2025',
                role: '2D Animator',
                tools: 'Adobe After Effects',
                client: 'Tugas Jurusan Animasi Kelas 10',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
                desc: 'Penerapan prinsip dasar animasi seperti squash & stretch, anticipation, dan easing dalam format 2D.',
                challenge: 'Mengatur kurva kecepatan agar pergerakan objek 2D terasa hidup dan tidak kaku.',
                steps: ['01 Storyboard', '02 Keyframing', '03 Graph Editor', '04 Export'],
                result: 'Klip animasi 2D yang melatih kepekaan ritme gerak.'
            }
        ];

        const urlParams = new URLSearchParams(window.location.search);
        const currentId = urlParams.get('id') || 'anim-01';
        const currentIndex = projectsData.findIndex(p => p.id === currentId);
        const project = projectsData[currentIndex !== -1 ? currentIndex : 0];

        const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
        const nextIndex = (currentIndex + 1) % projectsData.length;
        const prevProject = projectsData[prevIndex];
        const nextProject = projectsData[nextIndex];

        document.getElementById('dt-cat-year').textContent = `${project.category} • ${project.year}`;
        document.getElementById('dt-title').textContent = project.title;
        document.getElementById('dt-video').setAttribute('poster', project.posterUrl);
        document.getElementById('dt-video-src').setAttribute('src', project.videoUrl);
        document.getElementById('dt-video').load();

        document.getElementById('dt-desc').textContent = project.desc;
        document.getElementById('dt-challenge').textContent = project.challenge;
        document.getElementById('dt-result').textContent = project.result;

        const stepsContainer = document.getElementById('dt-steps');
        stepsContainer.innerHTML = project.steps.map(step => `<span class="step-pill">${step}</span>`).join('');

        document.getElementById('info-year').textContent = project.year;
        document.getElementById('info-cat').textContent = project.category;
        document.getElementById('info-role').textContent = project.role;
        document.getElementById('info-tools').textContent = project.tools;
        document.getElementById('info-client').textContent = project.client;

        const prevBtn = document.getElementById('nav-prev');
        const nextBtn = document.getElementById('nav-next');
        prevBtn.href = `project-detail.html?id=${prevProject.id}`;
        document.getElementById('prev-title').textContent = prevProject.title;

        nextBtn.href = `project-detail.html?id=${nextProject.id}`;
        document.getElementById('next-title').textContent = nextProject.title;
    }

    // 7. QUICK PREVIEW MODAL (VIDEO / FOTO LANGSUNG)
    const previewModal = document.getElementById('preview-modal');
    const modalMediaArea = document.getElementById('modal-media-area');
    const modalTitleText = document.getElementById('modal-title-text');
    const modalMetaText = document.getElementById('modal-meta-text');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (previewModal && modalMediaArea) {
        document.querySelectorAll('.btn-quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
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
                previewModal.classList.add('open');
            });
        });

        function closePreviewModal() {
            previewModal.classList.remove('open');
            modalMediaArea.innerHTML = '';
        }

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePreviewModal);
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closePreviewModal();
        });
    }

    // 8. AVAILABILITY BADGE (OPEN FOR PKL / INTERNSHIP & FREELANCE)
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.innerHTML = `● OPEN FOR PKL / INTERNSHIP & FREELANCE — GREAVEN K.P.`;
    }
});
