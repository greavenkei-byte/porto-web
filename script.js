/* =========================================================
   1. JAPANESE LOADING SCREEN
   ========================================================= */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loader-bar');
  const percentText = document.getElementById('loader-percent');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => loader.classList.add('hidden'), 300);
    }
    bar.style.width = `${progress}%`;
    percentText.textContent = `${progress}%`;
  }, 90);
});

/* =========================================================
   2. WEB AUDIO API — SUBTLE UI SOUND EFFECTS (NO EXTERNAL MP3)
   ========================================================= */
let soundEnabled = true;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq = 520, duration = 0.04, type = 'sine', gainVal = 0.03) {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

document.getElementById('sound-toggle').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  document.getElementById('sound-icon').textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) playTone(660, 0.06, 'triangle', 0.05);
});

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.sfx-hover')) {
    playTone(440, 0.025, 'sine', 0.015);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.sfx-click')) {
    playTone(620, 0.05, 'triangle', 0.04);
  }
});

/* =========================================================
   3. DARK / LIGHT THEME TOGGLE
   ========================================================= */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
});

/* =========================================================
   4. INTERACTIVE 3D TILT LANYARD ID CARD
   ========================================================= */
const idCard = document.getElementById('id-card');
if (idCard) {
  idCard.addEventListener('mousemove', (e) => {
    const rect = idCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    idCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  idCard.addEventListener('mouseleave', () => {
    idCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

/* =========================================================
   5. INTERACTIVE SKILLS & SOFTWARE SWITCHER
   ========================================================= */
const skillsData = [
  {
    tool: 'BLENDER & AUTODESK MAYA',
    percent: 92,
    desc: 'Keyframing, graph editor polishing, body mechanics, walk/run cycle, hingga ekspresi wajah karakter 3D menggunakan Blender dan Autodesk Maya.'
  },
  {
    tool: 'AUTODESK MAYA & BLENDER',
    percent: 88,
    desc: 'Penguasaan kontrol rig karakter, weight constraint, blocking pose-to-pose, dan spline animation untuk akting karakter yang ekspresif.'
  },
  {
    tool: 'ADOBE AFTER EFFECTS',
    percent: 86,
    desc: 'Compositing layer, motion graphics bumper, keyframe easing, visual effects ringan, dan transisi sinematik.'
  },
  {
    tool: 'CAPCUT & EDITING PIPELINE',
    percent: 90,
    desc: 'Pemotongan ritme video (pacing), color adjustment, sound sync, dan penyusunan konten multimedia cepat untuk event maupun media sosial.'
  }
];

const iconCards = document.querySelectorAll('.app-icon-card');
const bigTitles = document.querySelectorAll('.skill-big-title');
const toolBadge = document.getElementById('skill-tool-name');
const percentEl = document.getElementById('skill-percent-text');
const descEl = document.getElementById('skill-desc-text');
const barFill = document.getElementById('skill-bar-fill');

function selectSkill(index) {
  iconCards.forEach((btn, i) => btn.classList.toggle('active', i === index));
  bigTitles.forEach((btn, i) => btn.classList.toggle('active', i === index));

  const item = skillsData[index];
  toolBadge.textContent = item.tool;
  percentEl.textContent = `${item.percent}%`;
  descEl.textContent = item.desc;
  barFill.style.width = `${item.percent}%`;
}

iconCards.forEach((btn) => {
  btn.addEventListener('click', () => selectSkill(Number(btn.dataset.skill)));
});
bigTitles.forEach((btn) => {
  btn.addEventListener('click', () => selectSkill(Number(btn.dataset.skill)));
});

/* =========================================================
   6. 15 PORTFOLIO PROJECTS DATA
   CATATAN UNTUK GREAVEN:
   Ganti URL 'thumb' di bawah dengan 'assets/nama-file.jpg'
   setelah karya aslinya kamu upload ke folder assets di GitHub.
   ========================================================= */
const projects = [
  {
    title: 'Forum BKK Jawa Timur — 3D Logo Bumper',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Blender • After Effects',
    status: 'Completed (2026)',
    // Ganti dengan: 'assets/karya-bkk.jpg'
    thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi bumper logo 3D resmi bernuansa emerald green, putih, dan emas untuk acara tingkat provinsi Forum Bursa Kerja Khusus Jawa Timur.'
  },
  {
    title: 'Dynamic Parkour & Jump Mechanics',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Autodesk Maya',
    status: 'Placeholder — Siap Diganti',
    // Ganti dengan: 'assets/karya-2.jpg'
    thumb: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    desc: 'Latihan body mechanics 3D karakter melompati rintangan dengan fokus pada arc gerakan, antisipasi, dan follow-through.'
  },
  {
    title: 'Character Acting & Dialogue Shot',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi ekspresi wajah, eye-dart, dan lip-sync karakter 3D untuk adegan dialog emosional.'
  },
  {
    title: 'Heavy Weapon Combo Attack Cycle',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Autodesk Maya • Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
    desc: 'Sekuens animasi pertarungan bergaya RPG dengan penekanan pada weight, smear frame, dan impact camera shake.'
  },
  {
    title: 'Stylized Walk & Run Cycle Pack',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    desc: 'Kompilasi siklus berjalan dan berlari dengan variasi kepribadian karakter yang berbeda.'
  },
  {
    title: 'Creature Quadruped Locomotion',
    category: '3d',
    catLabel: '3D ANIMATION',
    tools: 'Autodesk Maya',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&w=800&q=80',
    desc: 'Studi pergerakan anatomi makhluk berkaki empat dari fase walk, trot, hingga gallop.'
  },
  {
    title: '2D Frame-by-Frame Action FX',
    category: '2d',
    catLabel: '2D ANIMATION',
    tools: 'Digital 2D • After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi efek elemen api, percikan listrik, dan asap secara frame-by-frame.'
  },
  {
    title: '2D Character Turnaround & Animatic',
    category: '2d',
    catLabel: '2D ANIMATION',
    tools: 'Digital Illustration • CapCut',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    desc: 'Perancangan storyboard animatic dan ekspresi karakter 2D sebelum masuk ke tahap produksi penuh.'
  },
  {
    title: '2D Sakuga Impact Cut Study',
    category: '2d',
    catLabel: '2D ANIMATION',
    tools: 'Digital 2D • After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80',
    desc: 'Eksplorasi kamera dinamis dan distorsi perspektif pada adegan aksi 2D berkecepatan tinggi.'
  },
  {
    title: '2D Looping Character Vignette',
    category: '2d',
    catLabel: '2D ANIMATION',
    tools: 'After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    desc: 'Ilustrasi karakter 2D dengan animasi rambut, pencahayaan, dan partikel latar yang berulang mulus.'
  },
  {
    title: 'FLS2N Short Film Production',
    category: 'multimedia',
    catLabel: 'MULTIMEDIA',
    tools: 'Camera Production • After Effects',
    status: 'Competition Entry',
    thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    desc: 'Produksi film pendek pelajar untuk kompetisi FLS2N, mencakup sinematografi, penyuntingan, dan color grading.'
  },
  {
    title: 'Klungkung Film Festival Entry',
    category: 'multimedia',
    catLabel: 'MULTIMEDIA',
    tools: 'Editing • Sound Design',
    status: 'Competition Entry',
    thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    desc: 'Karya film pendek festival yang berfokus pada alur cerita visual dan tata suara sinematik.'
  },
  {
    title: 'Aftermovie HUT SMKN 4 Madiun',
    category: 'multimedia',
    catLabel: 'MULTIMEDIA',
    tools: 'CapCut • After Effects',
    status: 'OSIS Sekbid 9',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    desc: 'Video dokumentasi dan rekapitulasi kemeriahan acara HUT sekolah bersama tim Sekbid 9 OSIS.'
  },
  {
    title: 'Live Streaming & Multi-Cam Switching',
    category: 'multimedia',
    catLabel: 'MULTIMEDIA',
    tools: 'Broadcast Switcher • Camera',
    status: 'Event Production',
    thumb: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    desc: 'Pengoperasian kamera produksi dan pengaturan switching siaran langsung untuk event sekolah.'
  },
  {
    title: 'Promotional Teaser — Jurusan Kuliner',
    category: 'multimedia',
    catLabel: 'MULTIMEDIA',
    tools: 'CapCut • After Effects',
    status: 'OSIS Sekbid 9',
    thumb: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    desc: 'Video promosi profil jurusan kuliner dengan transisi cepat dan penataan visual modern.'
  }
];

const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  filtered.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card sfx-hover';
    card.innerHTML = `
      <div class="project-thumb-wrap">
        <span class="project-badge">${proj.catLabel}</span>
        <img src="${proj.thumb}" alt="${proj.title}" class="project-thumb" loading="lazy" />
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-excerpt">${proj.desc}</p>
        <div class="project-tools">${proj.tools}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(proj));
    projectsGrid.appendChild(card);
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

renderProjects('all');

/* =========================================================
   7. PROJECT MODAL PREVIEW
   ========================================================= */
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-img');
const modalCat = document.getElementById('modal-cat');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTools = document.getElementById('modal-tools');
const modalStatus = document.getElementById('modal-status');

function openModal(proj) {
  playTone(580, 0.05, 'triangle', 0.04);
  modalImg.src = proj.thumb;
  modalCat.textContent = proj.catLabel;
  modalTitle.textContent = proj.title;
  modalDesc.textContent = proj.desc;
  modalTools.textContent = proj.tools;
  modalStatus.textContent = proj.status;
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-close-bg').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* =========================================================
   8. SCROLL REVEAL ANIMATION
   ========================================================= */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
