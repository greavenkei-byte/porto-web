/* ==========================================================================
   PORTFOLIO DATA — 18 WORKS (DENGAN FOTO RESOLUSI TINGGI DARI UNSPLASH)
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
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    video: ''
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
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    video: ''
  },
  {
    id: 12,
    branch: 'mulmed',
    mulmedCat: 'gereja',
    badge: 'TIM MULMED • SWITCHER',
    title: 'Live Streaming & Visual Switcher',
    subtitle: 'Multi-Camera Switching • Tim Multimedia',
    desc: 'Mengendalikan perpindahan sudut kamera secara langsung melalui perangkat switcher dan OBS untuk menjaga alur visual siaran live streaming.',
    tools: ['OBS / Switcher', 'Multi-Cam', 'Live Production'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80',
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
let resetCarouselPhysicsFn = null;

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
    initModal
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
    '.social-link-card',
    '.contact-email-btn',
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

    target.classList.remove('is-clicked');
    void target.offsetWidth;
    target.classList.add('is-clicked');
    setTimeout(() => target.classList.remove('is-clicked'), 380);
  });

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

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('joprass_theme') || 'dark';
  } catch (_) {}
  applyTheme(savedTheme);

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('joprass_theme', theme);
    } catch (_) {}
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

    if (pageName === 'projects' && resetCarouselPhysicsFn) {
      resetCarouselPhysicsFn(true);
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
    video.classList.add('is-playing');
    video.controls = true;
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', () => {
    video.play()
      .then(() => {
        video.classList.add('is-playing');
        video.controls = true;
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
    try {
      card.setPointerCapture(e.pointerId);
    } catch (_) {}
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
   PROJECTS: INERTIAL 3D DRAG-TO-SLIDE + CURSOR TILT SHOWCASE CAROUSEL
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
  const stage = document.getElementById('carouselStage');
  const dotsWrap = document.getElementById('carouselDots');
  const counterEl = document.getElementById('carouselCounter');
  if (!stage || !dotsWrap || !counterEl) return;

  let currentItems = [];
  let cardEls = [];
  let dotEls = [];

  let continuousPos = 0;
  let targetPos = 0;
  let velocity = 0;
  let isGrabbing = false;
  let hasDragged = false;
  let grabStartX = 0;
  let grabStartPos = 0;
  let lastPointerX = 0;
  let lastAnnouncedIdx = -1;

  let hoverTiltX = 0;
  let hoverTiltY = 0;

  function wrapDelta(rawDelta, total) {
    if (total <= 1) return 0;
    let d = ((rawDelta % total) + total) % total;
    if (d > total / 2) d -= total;
    return d;
  }

  function snapToNearest() {
    if (!currentItems.length) return;
    targetPos = Math.round(targetPos);
  }

  function goToIndex(idx) {
    if (!currentItems.length) return;
    const total = currentItems.length;
    const currentWrapped = ((Math.round(targetPos) % total) + total) % total;
    const diff = wrapDelta(idx - currentWrapped, total);
    targetPos += diff;
    playWhooshSound();
  }

  function stepCarousel(delta) {
    if (!currentItems.length) return;
    targetPos += delta;
    playWhooshSound();
  }

  function rebuildStage(dealWave = true) {
    currentItems = getFilteredProjects();
    stage.innerHTML = '';
    dotsWrap.innerHTML = '';
    cardEls = [];
    dotEls = [];

    continuousPos = 0;
    targetPos = 0;
    velocity = 0;
    lastAnnouncedIdx = -1;

    if (!currentItems.length) {
      stage.innerHTML = `
        <div class="info-box" style="text-align:center; max-width:420px;">
          <h3 class="card-title">Tidak ada karya pada filter ini</h3>
          <p class="card-desc">Silakan pilih kombinasi filter lain untuk menampilkan karya.</p>
        </div>
      `;
      counterEl.textContent = '00 / 00';
      return;
    }

    currentItems.forEach((item, idx) => {
      const card = document.createElement('article');
      card.className = `carousel-card${dealWave ? ' is-dealing' : ''}`;
      if (dealWave) {
        card.style.animationDelay = `${Math.min(idx * 45, 320)}ms`;
      }

      card.innerHTML = `
        <div class="carousel-card-gloss"></div>
        <div class="carousel-card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
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
        if (hasDragged) return;
        const total = currentItems.length;
        const activeIdx = ((Math.round(targetPos) % total) + total) % total;
        if (idx === activeIdx) {
          openProjectModal(item);
        } else {
          goToIndex(idx);
        }
      });

      stage.appendChild(card);
      cardEls.push(card);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Pilih karya ${idx + 1}`);
      dot.addEventListener('click', () => goToIndex(idx));
      dotsWrap.appendChild(dot);
      dotEls.push(dot);
    });
  }

  resetCarouselPhysicsFn = rebuildStage;

  stage.addEventListener('pointerdown', (e) => {
    if (!currentItems.length) return;
    isGrabbing = true;
    hasDragged = false;
    grabStartX = e.clientX;
    lastPointerX = e.clientX;
    grabStartPos = targetPos;
    velocity = 0;
    stage.classList.add('is-grabbing');
  });

  window.addEventListener('pointermove', (e) => {
    const rect = stage.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      hoverTiltY = nx * 10;
      hoverTiltX = -ny * 8;
    } else {
      hoverTiltX *= 0.9;
      hoverTiltY *= 0.9;
    }

    if (!isGrabbing) return;
    const dx = e.clientX - grabStartX;
    if (Math.abs(dx) > 6) {
      hasDragged = true;
    }
    const spacingX = window.innerWidth < 768 ? 240 : 320;
    targetPos = grabStartPos - dx / spacingX;
    velocity = -(e.clientX - lastPointerX) / spacingX;
    lastPointerX = e.clientX;
  }, { passive: true });

  window.addEventListener('pointerup', () => {
    if (!isGrabbing) return;
    isGrabbing = false;
    stage.classList.remove('is-grabbing');
    if (hasDragged) {
      targetPos += velocity * 3.2;
      snapToNearest();
      playWhooshSound();
      setTimeout(() => {
        hasDragged = false;
      }, 60);
    }
  });

  let wheelTimeout = null;
  stage.addEventListener('wheel', (e) => {
    if (!currentItems.length) return;
    const dominantDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(dominantDelta) < 4) return;
    e.preventDefault();
    targetPos += dominantDelta * 0.0024;
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      snapToNearest();
      playWhooshSound();
    }, 110);
  }, { passive: false });

  function animateShowcase() {
    if (state.currentPage === 'projects' && cardEls.length) {
      const prevPos = continuousPos;
      const ease = isGrabbing ? 0.32 : 0.13;
      continuousPos += (targetPos - continuousPos) * ease;
      const frameVel = continuousPos - prevPos;

      const total = currentItems.length;
      const spacingX = window.innerWidth < 768 ? 235 : 305;
      const activeIdx = ((Math.round(continuousPos) % total) + total) % total;

      if (activeIdx !== lastAnnouncedIdx) {
        lastAnnouncedIdx = activeIdx;
        const pad = (n) => String(n).padStart(2, '0');
        counterEl.textContent = `${pad(activeIdx + 1)} / ${pad(total)} • DRAG ATAU KLIK KARTU`;
        dotEls.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
      }

      cardEls.forEach((card, idx) => {
        const offset = wrapDelta(idx - continuousPos, total);
        const absOffset = Math.abs(offset);
        const isCenter = absOffset < 0.35;
        const isVisible = absOffset <= 4.2;

        const translateX = offset * spacingX;
        const translateZ = (1 - Math.min(absOffset, 2.5) / 2.5) * 75 - absOffset * 58;
        const scale = isCenter
          ? 1.05 - absOffset * 0.08
          : Math.max(0.74, 0.94 - absOffset * 0.048);

        const velLean = Math.max(-12, Math.min(12, frameVel * 48));
        const baseRotateY = -offset * 11 + velLean;
        const extraX = isCenter ? hoverTiltX * (1 - absOffset * 2) : 0;
        const extraY = isCenter ? hoverTiltY * (1 - absOffset * 2) : 0;
        const opacity = !isVisible ? 0 : Math.max(0.28, 1 - absOffset * 0.18);

        card.classList.toggle('is-center', isCenter);
        card.style.transform = `
          translate3d(${translateX.toFixed(2)}px, 0px, ${translateZ.toFixed(2)}px)
          scale(${scale.toFixed(4)})
          rotateY(${(baseRotateY + extraY).toFixed(2)}deg)
          rotateX(${extraX.toFixed(2)}deg)
        `;
        card.style.zIndex = String(30 - Math.round(absOffset * 5));
        card.style.opacity = opacity.toFixed(3);
        card.style.pointerEvents = isVisible ? 'auto' : 'none';
      });
    }

    requestAnimationFrame(animateShowcase);
  }
  animateShowcase();

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

      rebuildStage(true);
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
        rebuildStage(true);
      });
    });
  });

  document.getElementById('carouselPrev')?.addEventListener('click', () => stepCarousel(-1));
  document.getElementById('carouselNext')?.addEventListener('click', () => stepCarousel(1));

  window.addEventListener('keydown', (e) => {
    if (state.currentPage !== 'projects') return;
    if (document.getElementById('projectModal')?.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') stepCarousel(-1);
    if (e.key === 'ArrowRight') stepCarousel(1);
  });

  rebuildStage(false);
}

/* ==========================================================================
   PROJECT QUICK PREVIEW MODAL
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
    : `<img src="${project.image}" alt="${project.title}" />`;

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
