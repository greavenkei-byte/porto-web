document.addEventListener('DOMContentLoaded', () => {
    // 1. PRELOADER / OPENING SCREEN (1X PER SESI)
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');

    if (preloader) {
        if (sessionStorage.getItem('gkp_visited')) {
            preloader.classList.add('hidden');
        } else {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 7) + 4;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    if (loaderBar) loaderBar.style.width = '100%';
                    if (loaderPercent) loaderPercent.textContent = '100%';

                    setTimeout(() => {
                        preloader.classList.add('slide-up');
                        sessionStorage.setItem('gkp_visited', 'true');
                    }, 300);
                } else {
                    if (loaderBar) loaderBar.style.width = progress + '%';
                    if (loaderPercent) loaderPercent.textContent = String(progress).padStart(3, '0') + '%';
                }
            }, 35);
        }
    }

    // 2. MOBILE HAMBURGER MENU
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // 3. SCROLL REVEAL & VERTICAL TIMELINE PROGRESS
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));

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
                const endY = 85 + posY;
                const ctrlX = 160 + posX * 0.4;
                const ctrlY = 42 + posY * 0.3;
                lanyardSvgLine.setAttribute('d', `M 160 0 Q ${ctrlX} ${ctrlY} ${endX} ${endY}`);
            }

            requestAnimationFrame(animateCard);
        }
        animateCard();
    }

    // 5. PROJECT CATEGORY FILTER (PROJECTS PAGE)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 20);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            });
        });
    }

    // 6. DYNAMIC PROJECT DETAIL PAGE & PREV/NEXT NAVIGATION
    const detailContainer = document.getElementById('project-detail-root');
    if (detailContainer) {
        const projectsData = [
            {
                id: 'anim-01',
                title: '3D Animation Test 01',
                category: '3D Animation',
                year: '2026',
                role: '3D Animator',
                tools: 'Blender',
                client: 'Personal Study',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
                desc: 'Eksplorasi mekanika gerak karakter (walk cycle dan body mechanics) menggunakan Blender untuk melatih pemahaman terhadap prinsip animasi dasar.',
                challenge: 'Menjaga konsistensi timing, spacing, dan perpindahan pusat gravitasi (center of gravity) agar gerakan karakter terasa memiliki bobot dan natural.',
                steps: ['01 Referensi', '02 Blocking', '03 Spline', '04 Render'],
                result: 'Menghasilkan siklus gerakan karakter yang halus dengan kurva animasi yang bersih serta pencahayaan studio dasar.'
            },
            {
                id: 'anim-02',
                title: '3D Logo Bumper — Forum BKK Jatim',
                category: '3D Animation',
                year: '2026',
                role: '3D Animator & Motion Designer',
                tools: 'Blender, After Effects',
                client: 'Forum BKK Jawa Timur',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
                desc: 'Produksi video bumper pembuka 3D resmi dan aset visual promosi untuk acara regional Forum Bursa Kerja Khusus (BKK) Jawa Timur.',
                challenge: 'Menyelaraskan pergerakan kamera 3D dengan aksen suara (sound effects) dalam durasi singkat agar terlihat megah dan profesional.',
                steps: ['01 Konsep & Moodboard', '02 Camera Anim', '03 Lighting & Shader', '04 Compositing'],
                result: 'Bumper 3D beresolusi tinggi yang digunakan sebagai pembuka resmi rangkaian acara dan publikasi media.'
            },
            {
                id: 'edit-01',
                title: 'After Movie & Event Recap OSIS',
                category: 'Video Editing',
                year: '2026',
                role: 'Video Editor & Director',
                tools: 'Premiere Pro, After Effects, CapCut',
                client: 'OSIS SMKN 4 Madiun (Sekbid 9)',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-27667-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
                desc: 'Penyuntingan video ringkasan kegiatan sekolah dan acara OSIS dengan transisi cepat, sinkronisasi beat musik, dan color grading.',
                challenge: 'Menyortir ratusan klip rekaman dari berbagai sudut kamera dengan kondisi pencahayaan yang berbeda-beda menjadi satu alur cerita yang padu.',
                steps: ['01 Footage Sorting', '02 Rough Cut', '03 Rhythm Editing', '04 Color & Audio'],
                result: 'Video dokumentasi yang energik dan mendapat respons positif di kanal media sosial resmi sekolah.'
            },
            {
                id: 'video-01',
                title: 'Dokumentasi Event & Produksi Live Streaming',
                category: 'Videography',
                year: '2025 - 2026',
                role: 'Cameraman & Visual Switcher',
                tools: 'DSLR/Mirrorless, OBS Studio, Video Switcher',
                client: 'Dokumentasi Gereja & Event Sekolah',
                videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4',
                posterUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
                desc: 'Pengambilan gambar sinematik serta pengoperasian kamera dan visual switcher untuk siaran langsung acara berskala besar.',
                challenge: 'Menjaga stabilitas framing kamera secara real-time dan memastikan perpindahan antar sudut kamera berjalan mulus tanpa jeda.',
                steps: ['01 Setup Alat', '02 Framing & Angle', '03 Live Switching', '04 Archive'],
                result: 'Siaran langsung dan arsip dokumentasi visual yang jernih, stabil, dan tertata rapi.'
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
});
