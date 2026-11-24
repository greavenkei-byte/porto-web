/* ==========================================================================
   PORTFOLIO DATA — 18 WORKS (10 WORKS 2D/3D + 8 WORKS MULTIMEDIA)
   ========================================================================== */
const PROJECTS_DATA = [
  {
    id: 0,
    branch: '2d3d',
    type: '3d',
    grade: '11',
    division: 'animation',
    badge: '3D ANIMATION • KLS 11',
    title: '3D Character Body Mechanics',
    subtitle: 'Blender • Graph Editor & Weight Shift',
    desc: 'Eksplorasi mekanika tubuh karakter 3D seperti lompatan, pendaratan, dan perpindahan pusat gravitasi menggunakan pengaturan kurva Graph Editor yang presisi.',
    tools: ['Blender', 'Graph Editor', 'Character Rigging'],
    image: 'assets/work-3d-body.jpg',
    video: 'assets/work-3d-body.mp4'
  },
  {
    id: 1,
    branch: '2d3d',
    type: '3d',
    grade: '11',
    division: 'animation',
    badge: '3D ANIMATION • KLS 11',
    title: '3D Character Acting & Expression',
    subtitle: 'Blender • Facial Pose & Gesture',
    desc: 'Latihan akting karakter 3D yang menonjolkan ekspresi wajah, antisipasi gerakan tangan, serta ritme jeda (timing) agar emosi karakter terasa hidup.',
    tools: ['Blender', 'Character Acting', 'Lighting'],
    image: 'assets/work-3d-acting.jpg',
    video: ''
  },
  {
    id: 2,
    branch: '2d3d',
    type: '3d',
    grade: '11',
    division: 'animation',
    badge: '3D ANIMATION • KLS 11',
    title: '3D Dynamic Action & Camera Cut',
    subtitle: 'Autodesk Maya & Blender • Staging',
    desc: 'Sekuens aksi dinamis dengan perpaduan pergerakan kamera sinematik, follow-through, dan penataan pencahayaan dramatis.',
    tools: ['Autodesk Maya', 'Blender', 'Camera Staging'],
    image: 'assets/work-3d-action.jpg',
    video: ''
  },
  {
    id: 3,
    branch: '2d3d',
    type: '3d',
    grade: '11',
    division: 'animation',
    badge: '3D ANIMATION • KLS 11',
    title: '3D Dialogue & Lip Sync Study',
    subtitle: 'Blender • Phoneme & Eye Dart',
    desc: 'Sinkronisasi gerak bibir (lip sync) dengan dialog audio yang dipadukan gerakan mata dan bahasa tubuh alami.',
    tools: ['Blender', 'Lip Sync', 'Animation Curves'],
    image: 'assets/work-3d-lipsync.jpg',
    video: ''
  },
  {
    id: 4,
    branch: '2d3d',
    type: '3d',
    grade: '10',
    division: 'animation',
    badge: '3D WALK CYCLE • KLS 10',
    title: '3D Walk Cycle & Physics Timing',
    subtitle: 'Blender • Locomotion & Overlapping Action',
    desc: 'Animasi siklus berjalan karakter dengan variasi kepribadian serta penerapan prinsip overlapping action pada bagian sekunder.',
    tools: ['Blender', 'Walk Cycle', 'Keyframing'],
    image: 'assets/work-3d-walk.jpg',
    video: ''
  },
  {
    id: 5,
    branch: '2d3d',
    type: '2d',
    grade: '11',
    division: 'animation',
    badge: '2D ANIMATION • KLS 11',
    title: '2D Character Frame-by-Frame Action',
    subtitle: '2D Digital Animation • Line & Timing',
    desc: 'Pendalaman animasi 2D frame-by-frame di Kelas 11 dengan fokus pada keluwesan garis gerak (arc), squash & stretch, dan smear frame.',
    tools: ['2D Animation', 'Frame-by-Frame', 'Timing'],
    image: 'assets/work-2d-action.jpg',
    video: ''
  },
  {
    id: 6,
    branch: '2d3d',
    type: '2d',
    grade: '10',
    division: 'animation',
    badge: '2D FUNDAMENTAL • KLS 10',
    title: '2D 12 Principles of Animation',
    subtitle: 'Gambar 2D & Dasar Gerak • Kelas 10',
    desc: 'Latihan dasar 12 prinsip animasi mulai dari bouncing ball, pendulum, hingga ekspresi karakter 2D.',
    tools: ['2D Drawing', '12 Principles', 'Storyboarding'],
    image: 'assets/work-2d-principles.jpg',
    video: ''
  },
  {
    id: 7,
    branch: '2d3d',
    type: '3d',
    grade: '10',
    division: 'modeling',
    badge: '3D MODELING • KLS 10',
    title: '3D Hard Surface & Prop Modeling',
    subtitle: 'Blender • Topology & Clean Mesh (Kls 10)',
    desc: 'Pemodelan objek hard-surface dengan struktur topologi bersih dan bevel presisi sebagai fondasi 3D di Kelas 10.',
    tools: ['Blender', 'Hard Surface', '3D Modeling'],
    image: 'assets/work-3d-hardsurface.jpg',
    video: ''
  },
  {
    id: 8,
    branch: '2d3d',
    type: '3d',
    grade: '10',
    division: 'modeling',
    badge: '3D ENVIRONMENT • KLS 10',
    title: '3D Isometric Room Environment',
    subtitle: 'Blender • Interior Modeling & Lighting (Kls 10)',
    desc: 'Perancangan ruang isometrik lengkap dengan properti ruangan, material dasar, dan pencahayaan hangat.',
    tools: ['Blender', 'Environment', 'Shader & Light'],
    image: 'assets/work-3d-room.jpg',
    video: ''
  },
  {
    id: 9,
    branch: '2d3d',
    type: '3d',
    grade: '10',
    division: 'modeling',
    badge: '3D ASSET • KLS 10',
    title: '3D Stylized Asset & UV Mapping',
    subtitle: 'Blender • UV Unwrapping & Texturing (Kls 10)',
    desc: 'Pembuatan aset bergaya stylized beserta penataan UV map dan pewarnaan tekstur siap render.',
    tools: ['Blender', 'UV Mapping', 'Texturing'],
    image: 'assets/work-3d-stylized.jpg',
    video: ''
  },
  {
    id: 10,
    branch: 'mulmed',
    mulmedCat: 'osis',
    badge: 'OSIS SEKBID 9 • EDITING',
    title: 'After Movie & Event Recap OSIS',
    subtitle: 'Editing & Videografi • Sekbid 9 SMKN 4 Madiun',
    desc: 'Penyuntingan video after-movie acara besar sekolah dengan transisi dinamis yang selaras dengan ritme musik serta koordinasi tim liputan OSIS.',
    tools: ['CapCut', 'DSLR / Mirrorless', 'Koordinasi Liputan'],
    image: 'assets/work-osis-aftermovie.jpg',
    video: ''
  },
  {
    id: 11,
    branch: 'mulmed',
    mulmedCat: 'osis',
    badge: 'OSIS SEKBID 9 • LIPUTAN',
    title: 'Dokumentasi Upacara & Hari Besar Sekolah',
    subtitle: 'Videografi Lapangan & Publikasi Digital',
    desc: 'Bertugas langsung di lapangan mengabadikan momen upacara, HUT sekolah, dan kegiatan siswa untuk publikasi resmi media sosial.',
    tools: ['Mirrorless', 'Video Recap', 'Social Media Reels'],
    image: 'assets/work-osis-liputan.jpg',
    video: ''
  },
  {
    id: 12,
    branch: 'mulmed',
    mulmedCat: 'gereja',
    badge: 'TIM MULMED • SWITCHER',
    title: 'Live Streaming & Visual Switcher',
    subtitle: 'Multi-Camera Switching • Tim Multimedia Gereja',
    desc: 'Mengendalikan perpindahan sudut kamera secara langsung melalui perangkat switcher dan OBS untuk menjaga alur visual siaran live streaming.',
    tools: ['OBS / Switcher', 'Multi-Cam', 'Live Production'],
    image: 'assets/work-switcher.jpg',
    video: ''
  },
  {
    id: 13,
    branch: 'mulmed',
    mulmedCat: 'gereja',
    badge: 'TIM MULMED • CAMERAMAN',
    title: 'Cameraman Utama Multi-Cam Event',
    subtitle: 'Pengoperasian Kamera & Framing',
    desc: 'Bertugas sebagai kameramen utama dalam pengambilan gambar dinamis selama acara berlangsung dengan komposisi framing yang stabil.',
    tools: ['Broadcast Camera', 'Camcorder', 'Live Framing'],
    image: 'assets/work-cameraman.jpg',
    video: ''
  },
  {
    id: 14,
    branch: 'mulmed',
    mulmedCat: 'freelance',
    badge: 'FREELANCE • PRODUCTION',
    title: 'Freelance Video Editing & Event Shoot',
    subtitle: 'Videografi & Post-Production Proyek Klien',
    desc: 'Mengerjakan perekaman lapangan dan penyuntingan video dokumentasi acara, highlight kegiatan, hingga konten promosi pesanan klien.',
    tools: ['CapCut', 'KineMaster', 'DSLR / Mirrorless'],
    image: 'assets/work-freelance-edit.jpg',
    video: ''
  },
  {
    id: 15,
    branch: 'mulmed',
    mulmedCat: 'osis',
    badge: 'OSIS SEKBID 9 • VIDEO PROFIL',
    title: 'Video Profil & Praktik Jurusan Sekolah',
    subtitle: 'Sinematografi & Editing Kegiatan Praktik',
    desc: 'Produksi video dokumentasi kegiatan praktik kelas dan profil jurusan dengan alur visual yang informatif dan rapi.',
    tools: ['CapCut', 'Mirrorless', 'Color Grading'],
    image: 'assets/work-osis-profil.jpg',
    video: ''
  },
  {
    id: 16,
    branch: 'mulmed',
    mulmedCat: 'gereja',
    badge: 'TIM MULMED • BROADCAST',
    title: 'Operasional Broadcast Camera & Camcorder',
    subtitle: 'Setup Kamera Besar & Kestabilan Gambar',
    desc: 'Pengoperasian kamera broadcast dan camcorder untuk liputan acara berskala besar dengan pengaturan fokus serta eksposur manual.',
    tools: ['Broadcast Camera', 'Camcorder', 'Tripod Fluid Head'],
    image: 'assets/work-broadcast.jpg',
    video: ''
  },
  {
    id: 17,
    branch: 'mulmed',
    mulmedCat: 'freelance',
    badge: 'FREELANCE • VERTICAL REELS',
    title: 'Konten Media Sosial Vertikal & Beat Sync',
    subtitle: 'Editing Cepat & Ritme Audio Presisi',
    desc: 'Penyuntingan video vertikal 9:16 untuk kebutuhan Reels dan TikTok dengan pemotongan adegan yang tepat mengikuti ketukan audio.',
    tools: ['CapCut', 'KineMaster', 'Beat Sync Editing'],
    image: 'assets/work-freelance-reels.jpg',
    video: ''
  }
];

/* ==========================================================================
   STATE & AUDIO SYNTHESIZER
   ========================================================================== */
const state = {
  currentPage: 'home',
  soundEnabled: true,
  branch: '2d3d',
  filters: {
    type: 'all',
    grade: 'all',
    division: 'all',
    mulmedCat: 'all'
  },
  carouselIndex: 0
};

let audioCtx = null;
let refreshRevealsFn = null;
let animateProficiencyFn = null;

function ensureAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playClickSound() {
  if (!state.soundEnabled) return;
  try {
    ensureAudioContext();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.055);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.055);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.06);
  } catch (_) {}
}

function playWhooshSound() {
  if (!state.soundEnabled) return;
  try {
    ensureAudioContext();
    if (!audioCtx) return;
    const bufferSize = audioCtx.sampleRate * 0.24;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.12);
    filter.frequency.exponentialRampToValueAtTime(280, audioCtx.currentTime + 0.24);
    filter.Q.value = 1.6;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.24);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start();
  } catch (_) {}
}

/* ==========================================================================
   BOOTSTRAP
   ========================================================================== */
function bootPortfolioApp() {
  [
    initInteractiveClickEffects,
    initScrollReveal,
    initProficiencyBars,
    initCursorFollower,
    initThemeAndSound,
    initNavigation,
    initShowreel,
    initIdCardPhysics,
    initProjectsCarousel,
    initModal,
    initContactForm
  ].forEach((fn) => {
    try {
      fn();
    } catch (err) {
      console.error(err);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootPortfolioApp);
} else {
  bootPortfolioApp();
}

/* ==========================================================================
   1. UNIVERSAL CLICK RIPPLE & INTERACTIVE WORKFLOW STEPS
   ========================================================================== */
function initInteractiveClickEffects() {
  const interactiveSelector = [
    '.btn',
    '.icon-btn',
    '.nav-link',
    '.mobile-nav-link',
    '.branch-tab',
    '.filter-pill',
    '.workflow-step',
    '.capability-card',
    '.work-preview-card',
    '.timeline-card',
    '.info-box',
    '.contact-item',
    '.skill-pill',
    '.prof-item',
    '.carousel-nav-btn',
    '.carousel-dot',
    '.showreel-fallback-overlay'
  ].join(', ');

  document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (!target) return;

    playClickSound();

    // Ensure positioning for ripple
    const computedPos = window.getComputedStyle(target).position;
    if (computedPos === 'static') {
      target.classList.add('has-ripple');
    } else {
      target.style.overflow = 'hidden';
    }

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 620);

    // Tactile spring animation
    target.classList.remove('is-clicked');
    void target.offsetWidth;
    target.classList.add('is-clicked');
    setTimeout(() => target.classList.remove('is-clicked'), 380);
  });

  // Make Workflow Steps (KEYFRAME 01 - 04) selectable on click
  const workflowSteps = document.querySelectorAll('.workflow-step');
  workflowSteps.forEach((step) => {
    step.addEventListener('click', () => {
      const wasSelected = step.classList.contains('is-selected');
      workflowSteps.forEach((s) => s.classList.remove('is-selected'));
      if (!wasSelected) {
        step.classList.add('is-selected');
      }
    });
  });
}

/* ==========================================================================
   2. SAFE SCROLL & PAGE ENTRANCE REVEAL
   ========================================================================== */
function initScrollReveal() {
  document.body.classList.add('anim-ready');
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));

  refreshRevealsFn = () => {
    const activePage = document.querySelector('.page-section.active');
    if (!activePage) return;
    activePage.querySelectorAll('.reveal').forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 60) {
        setTimeout(() => el.classList.add('is-visible'), idx * 75);
      } else {
        el.classList.remove('is-visible');
        observer.observe(el);
      }
    });
  };

  refreshRevealsFn();
}

/* ==========================================================================
   3. ANIMATED SOFTWARE PROFICIENCY BARS (ABOUT PAGE)
   ========================================================================== */
function initProficiencyBars() {
  const fills = document.querySelectorAll('#skillsBars .prof-fill');
  if (!fills.length) return;

  fills.forEach((fill) => {
    const target = fill.style.width || '0%';
    fill.setAttribute('data-target-width', target);
    fill.style.width = '0%';
  });

  animateProficiencyFn = (resetFirst = false) => {
    if (resetFirst) {
      fills.forEach((f) => {
        f.style.transition = 'none';
        f.style.width = '0%';
      });
      void document.body.offsetWidth;
    }

    fills.forEach((fill, idx) => {
      const target = fill.getAttribute('data-target-width') || '0%';
      fill.style.transition = 'width 1s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => {
        fill.style.width = target;
      }, 120 + idx * 110);
    });
  };

  const skillsSection = document.getElementById('skillsBars');
  if (skillsSection) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProficiencyFn(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(skillsSection);
  }
}

/* ==========================================================================
   CURSOR FOLLOWER
   ========================================================================== */
function initCursorFollower() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  }, { passive: true });

  function animateGlow() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ==========================================================================
   THEME & SOUND TOGGLES
   ========================================================================== */
function initThemeAndSound() {
  const themeToggle = document.getElementById('themeToggle');
  const soundToggle = document.getElementById('soundToggle');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('joprass_theme') || 'dark';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('joprass_theme', theme);
    const sunIcon = themeToggle?.querySelector('.icon-sun');
    const moonIcon = themeToggle?.querySelector('.icon-moon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      moonIcon.style.display = theme === 'light' ? 'block' : 'none';
    }
  }

  themeToggle?.addEventListener('click', () => {
    const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  soundToggle?.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    const onIcon = soundToggle.querySelector('.icon-sound-on');
    const offIcon = soundToggle.querySelector('.icon-sound-off');
    if (onIcon && offIcon) {
      onIcon.style.display = state.soundEnabled ? 'block' : 'none';
      offIcon.style.display = state.soundEnabled ? 'none' : 'block';
    }
    if (state.soundEnabled) playClickSound();
  });
}

/* ==========================================================================
   MULTI-PAGE NAVIGATION WITH "JOPRASS" CURTAIN TRANSITION
   ========================================================================== */
function initNavigation() {
  const navTriggers = document.querySelectorAll('[data-nav]');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
  });

  navTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = btn.getAttribute('data-nav');
      if (!targetPage) return;
      mobileMenu?.classList.remove('open');
      navigateToPage(targetPage);
    });
  });

  document.querySelectorAll('[data-open-project]').forEach((card) => {
    card.addEventListener('click', () => {
      const id = Number(card.getAttribute('data-open-project'));
      const project = PROJECTS_DATA.find((p) => p.id === id);
      if (project) {
        openProjectModal(project);
      }
    });
  });
}

function navigateToPage(pageName) {
  if (pageName === state.currentPage) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  playWhooshSound();
  const curtain = document.getElementById('pageTransition');
  curtain?.classList.add('active');

  setTimeout(() => {
    state.currentPage = pageName;

    document.querySelectorAll('.page-section').forEach((sec) => {
      sec.classList.toggle('active', sec.id === `page-${pageName}`);
    });

    document.querySelectorAll('[data-nav]').forEach((el) => {
      if (el.classList.contains('nav-link') || el.classList.contains('mobile-nav-link')) {
        el.classList.toggle('active', el.getAttribute('data-nav') === pageName);
      }
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    if (pageName === 'projects') {
      renderCarousel(true);
    }

    if (pageName === 'about' && animateProficiencyFn) {
      animateProficiencyFn(true);
    }

    if (refreshRevealsFn) {
      refreshRevealsFn();
    }

    setTimeout(() => {
      curtain?.classList.remove('active');
    }, 180);
  }, 240);
}

/* ==========================================================================
   SHOWREEL PLAYER OVERLAY
   ========================================================================== */
function initShowreel() {
  const video = document.querySelector('.showreel-video');
  const overlay = document.getElementById('showreelFallback');
  if (!video || !overlay) return;

  video.addEventListener('loadeddata', () => {
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    video.play()
      .then(() => {
        overlay.classList.add('hidden');
      })
      .catch(() => {
        let msg = overlay.querySelector('.showreel-status-msg');
        if (!msg) {
          msg = document.createElement('span');
          msg.className = 'showreel-status-msg';
          msg.textContent = 'File video showreel siap diputar setelah assets/showreel.mp4 diunggah';
          overlay.appendChild(msg);
        }
      });
  });
}

/* ==========================================================================
   ABOUT: INTERACTIVE 3D HANGING ID CARD & SPRING LANYARD PHYSICS
   ========================================================================== */
function initIdCardPhysics() {
  const scene = document.getElementById('idCardScene');
  const card = document.getElementById('idCard3d');
  const canvas = document.getElementById('lanyardCanvas');
  const flipBtn = document.getElementById('flipCardBtn');

  if (!scene || !card || !canvas) return;
  const ctx = canvas.getContext('2d');

  let isFlipped = false;
  let isDragging = false;
  let dragMoved = false;
  let startX = 0;
  let startY = 0;

  let angle = 0;
  let angularVel = 0;
  let offsetX = 0;
  let offsetY = 0;
  let velX = 0;
  let velY = 0;
  let tiltX = 0;
  let tiltY = 0;

  function toggleFlip() {
    isFlipped = !isFlipped;
    playWhooshSound();
    angularVel += (isFlipped ? 1 : -1) * 0.045;
  }

  flipBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFlip();
  });

  card.addEventListener('pointerdown', (e) => {
    isDragging = true;
    dragMoved = false;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    card.setPointerCapture(e.pointerId);
  });

  window.addEventListener('pointermove', (e) => {
    if (isDragging) {
      const nextX = Math.max(-75, Math.min(75, e.clientX - startX));
      const nextY = Math.max(-25, Math.min(55, e.clientY - startY));
      if (Math.hypot(nextX - offsetX, nextY - offsetY) > 3) {
        dragMoved = true;
      }
      offsetX = nextX;
      offsetY = nextY;
      angle = -offsetX * 0.0045;
    } else {
      const rect = card.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        tiltY = nx * 16;
        tiltX = -ny * 14;
      } else {
        tiltX *= 0.9;
        tiltY *= 0.9;
      }
    }
  });

  window.addEventListener('pointerup', () => {
    if (!isDragging) return;
    isDragging = false;
    if (!dragMoved) {
      toggleFlip();
    } else {
      playWhooshSound();
    }
  });

  function drawLanyard(clipX, clipY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const topLeftX = 148;
    const topRightX = 192;
    const ctrlY = clipY * 0.55;

    const grad = ctx.createLinearGradient(0, 0, 0, clipY);
    grad.addColorStop(0, '#18181b');
    grad.addColorStop(0.5, '#27272a');
    grad.addColorStop(1, '#3f3f46');

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(topLeftX, 0);
    ctx.quadraticCurveTo(topLeftX + (clipX - 170) * 0.35, ctrlY, clipX - 11, clipY);
    ctx.lineTo(clipX + 11, clipY);
    ctx.quadraticCurveTo(topRightX + (clipX - 170) * 0.35, ctrlY, topRightX, 0);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.translate((170 + clipX) * 0.5, clipY * 0.48);
    ctx.rotate(Math.atan2(clipY, clipX - 170));
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '600 9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('JOPRASS', 0, 3);
    ctx.restore();

    ctx.beginPath();
    ctx.arc(clipX, clipY + 4, 7, 0, Math.PI * 2);
    ctx.strokeStyle = '#e4e4e7';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  function animateCard() {
    if (!isDragging) {
      const stiffness = 0.085;
      const damping = 0.86;

      velX = (velX + -offsetX * stiffness) * damping;
      velY = (velY + -offsetY * stiffness) * damping;
      offsetX += velX;
      offsetY += velY;

      const targetAngle = -offsetX * 0.004;
      angularVel = (angularVel + (targetAngle - angle) * 0.09) * 0.88;
      angle += angularVel;
    }

    const flipDeg = isFlipped ? 180 : 0;
    const swingDeg = (angle * 180) / Math.PI;

    card.style.transform = `
      translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0)
      rotateZ(${swingDeg.toFixed(2)}deg)
      rotateY(${(flipDeg + tiltY).toFixed(2)}deg)
      rotateX(${tiltX.toFixed(2)}deg)
    `;

    drawLanyard(170 + offsetX, 134 + offsetY);
    requestAnimationFrame(animateCard);
  }

  animateCard();
}

/* ==========================================================================
   PROJECTS: FULL-BLEED EDGE-TO-EDGE CAROUSEL & MULTI-FILTER SYSTEM
   ========================================================================== */
function getFilteredProjects() {
  return PROJECTS_DATA.filter((item) => {
    if (item.branch !== state.branch) return false;

    if (state.branch === '2d3d') {
      if (state.filters.type !== 'all' && item.type !== state.filters.type) return false;
      if (state.filters.grade !== 'all' && item.grade !== state.filters.grade) return false;
      if (state.filters.division !== 'all' && item.division !== state.filters.division) return false;
      return true;
    }

    if (state.branch === 'mulmed') {
      if (state.filters.mulmedCat !== 'all' && item.mulmedCat !== state.filters.mulmedCat) {
        return false;
      }
      return true;
    }

    return true;
  });
}

function initProjectsCarousel() {
  const branchTabs = document.querySelectorAll('.branch-tab');
  const filterPanels = {
    '2d3d': document.getElementById('filters-2d3d'),
    mulmed: document.getElementById('filters-mulmed')
  };

  branchTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const branch = tab.getAttribute('data-branch');
      if (!branch || branch === state.branch) return;

      playWhooshSound();
      state.branch = branch;
      state.carouselIndex = 0;

      branchTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });

      if (filterPanels['2d3d']) {
        filterPanels['2d3d'].style.display = branch === '2d3d' ? 'flex' : 'none';
      }
      if (filterPanels.mulmed) {
        filterPanels.mulmed.style.display = branch === 'mulmed' ? 'flex' : 'none';
      }

      renderCarousel(true);
    });
  });

  document.querySelectorAll('.filter-pills').forEach((group) => {
    const groupName = group.getAttribute('data-filter-group');
    group.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        group.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        if (groupName) {
          state.filters[groupName] = pill.getAttribute('data-value') || 'all';
        }
        state.carouselIndex = 0;
        renderCarousel(true);
      });
    });
  });

  document.getElementById('carouselPrev')?.addEventListener('click', () => {
    stepCarousel(-1);
  });

  document.getElementById('carouselNext')?.addEventListener('click', () => {
    stepCarousel(1);
  });

  window.addEventListener('keydown', (e) => {
    if (state.currentPage !== 'projects') return;
    if (document.getElementById('projectModal')?.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') stepCarousel(-1);
    if (e.key === 'ArrowRight') stepCarousel(1);
  });

  const stage = document.getElementById('carouselStage');
  let touchStartX = 0;
  stage?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  stage?.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 42) {
      stepCarousel(diff < 0 ? 1 : -1);
    }
  }, { passive: true });

  renderCarousel(false);
}

function stepCarousel(delta) {
  const items = getFilteredProjects();
  if (!items.length) return;
  state.carouselIndex = (state.carouselIndex + delta + items.length) % items.length;
  renderCarousel(false);
}

function renderCarousel(animateStage = false) {
  const stage = document.getElementById('carouselStage');
  const dotsWrap = document.getElementById('carouselDots');
  const counterEl = document.getElementById('carouselCounter');
  if (!stage || !dotsWrap || !counterEl) return;

  if (animateStage) {
    stage.classList.remove('is-filtering');
    void stage.offsetWidth;
    stage.classList.add('is-filtering');
  }

  const items = getFilteredProjects();
  stage.innerHTML = '';
  dotsWrap.innerHTML = '';

  if (!items.length) {
    stage.innerHTML = `
      <div class="info-box" style="text-align:center; max-width:420px;">
        <h3 class="card-title">Tidak ada karya pada filter ini</h3>
        <p class="card-desc">Silakan pilih kombinasi filter lain untuk menampilkan karya.</p>
      </div>
    `;
    counterEl.textContent = '00 / 00';
    return;
  }

  if (state.carouselIndex >= items.length) {
    state.carouselIndex = 0;
  }

  const total = items.length;

  items.forEach((item, idx) => {
    let offset = idx - state.carouselIndex;
    if (total > 2) {
      if (offset > Math.floor(total / 2)) offset -= total;
      if (offset < -Math.floor(total / 2)) offset += total;
    }

    const absOffset = Math.abs(offset);
    const isCenter = offset === 0;
    const isVisible = absOffset <= 4;
    const spacingX = window.innerWidth < 768 ? 225 : 295;
    const translateX = offset * spacingX;
    const translateZ = isCenter ? 40 : -absOffset * 70;
    const scale = isCenter ? 1.04 : Math.max(0.76, 0.94 - absOffset * 0.045);
    const rotateY = offset === 0 ? 0 : offset > 0 ? -Math.min(14, absOffset * 4) : Math.min(14, absOffset * 4);
    const opacity = !isVisible ? 0 : isCenter ? 1 : Math.max(0.38, 0.88 - absOffset * 0.14);

    const card = document.createElement('article');
    card.className = `carousel-card${isCenter ? ' is-center' : ''}`;
    card.style.transform = `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`;
    card.style.zIndex = String(20 - absOffset);
    card.style.opacity = String(opacity);
    card.style.pointerEvents = isVisible ? 'auto' : 'none';

    card.innerHTML = `
      <div class="carousel-card-gloss"></div>
      <div class="carousel-card-media">
        <img
          src="${item.image}"
          alt="${item.title}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="carousel-card-art" style="display:none;">
          <span>${item.badge}</span>
          <strong style="font-family:var(--font-display); color:#fff; font-size:1.05rem;">${item.title}</strong>
        </div>
        <span class="carousel-card-badge">${item.badge}</span>
      </div>
      <div class="carousel-card-body">
        <div>
          <h3 class="carousel-card-title">${item.title}</h3>
          <div class="carousel-card-sub">${item.subtitle}</div>
          <p class="carousel-card-desc">${item.desc}</p>
        </div>
        <div class="carousel-card-action">KLIK UNTUK DETAIL KARYA →</div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (isCenter) {
        openProjectModal(item);
      } else {
        state.carouselIndex = idx;
        renderCarousel(false);
      }
    });

    stage.appendChild(card);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `carousel-dot${isCenter ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Pilih karya ${idx + 1}`);
    dot.addEventListener('click', () => {
      state.carouselIndex = idx;
      renderCarousel(false);
    });
    dotsWrap.appendChild(dot);
  });

  const pad = (n) => String(n).padStart(2, '0');
  counterEl.textContent = `${pad(state.carouselIndex + 1)} / ${pad(total)}`;
}

window.addEventListener('resize', () => {
  if (state.currentPage === 'projects') {
    renderCarousel(false);
  }
}, { passive: true });

/* ==========================================================================
   PROJECT QUICK PREVIEW MODAL (WITH SMOOTH SCALE & FADE)
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');

  closeBtn?.addEventListener('click', closeProjectModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  const media = document.getElementById('modalMedia');
  const badges = document.getElementById('modalBadges');
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');
  const tools = document.getElementById('modalTools');

  if (!modal || !media || !badges || !title || !desc || !tools) return;

  playWhooshSound();

  media.innerHTML = project.video
    ? `<video src="${project.video}" poster="${project.image}" controls autoplay playsinline></video>`
    : `<img src="${project.image}" alt="${project.title}" onerror="this.parentElement.style.display='none'" />`;

  media.style.display = 'block';
  badges.innerHTML = `<span class="tag-pill">${project.badge}</span><span class="tag-pill">${project.subtitle}</span>`;
  title.textContent = project.title;
  desc.textContent = project.desc;
  tools.innerHTML = project.tools.map((t) => `<span class="skill-pill">${t}</span>`).join('');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const media = document.getElementById('modalMedia');
  if (!modal) return;
  playClickSound();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    if (!modal.classList.contains('open') && media) {
      media.innerHTML = '';
    }
  }, 340);
}

/* ==========================================================================
   CONTACT FORM (DIRECT WHATSAPP HANDOFF)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    playClickSound();

    const name = document.getElementById('senderName')?.value.trim() || '';
    const email = document.getElementById('senderEmail')?.value.trim() || '';
    const topic = document.getElementById('senderTopic')?.value || '';
    const message = document.getElementById('senderMessage')?.value.trim() || '';

    const text = `Halo Greaven (Joprass), saya *${name}* (${email}).%0A%0A*Kebutuhan Proyek:* ${topic}%0A*Detail Pesan:* ${message}`;
    window.open(`https://wa.me/62895622607368?text=${text}`, '_blank', 'noopener,noreferrer');
  });
}
