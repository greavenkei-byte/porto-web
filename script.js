/* 1. Japanese Loading Screen */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-fill');
  const pct = document.getElementById('loader-percent');

  let val = 0;
  const timer = setInterval(() => {
    val += Math.floor(Math.random() * 18) + 12;
    if (val >= 100) {
      val = 100;
      clearInterval(timer);
      setTimeout(() => loader.classList.add('done'), 280);
    }
    fill.style.width = `${val}%`;
    pct.textContent = `${val}%`;
  }, 85);
});

/* 2. Custom Cursor Glow */
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  if (cursorGlow) {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }
});

/* 3. UI Sound Effects (Web Audio API) */
let isMuted = false;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function sfx(freq = 540, dur = 0.04, gainVal = 0.025) {
  if (isMuted) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + dur);
}

document.getElementById('sound-btn').addEventListener('click', (e) => {
  isMuted = !isMuted;
  e.target.textContent = isMuted ? '🔇' : '🔊';
  if (!isMuted) sfx(680, 0.05, 0.04);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.sfx-click')) sfx(600, 0.045, 0.03);
});

/* 4. Dark / Light Mode Toggle */
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});

/* 5. Interactive Flip Lanyard ID Card */
const lanyardCard = document.getElementById('lanyard-card');
if (lanyardCard) {
  lanyardCard.addEventListener('click', () => {
    lanyardCard.classList.toggle('flipped');
  });
}

/* 6. 15 Projects Data (Ganti 'thumb' dengan file di folder assets/ jika karya sudah jadi) */
const projects = [
  {
    title: 'Forum BKK Jawa Timur — 3D Logo Bumper',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Blender • After Effects',
    status: 'Completed (2026)',
    thumb: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    desc: 'Video bumper logo 3D resmi bernuansa emerald green, putih, dan emas untuk acara tingkat provinsi Forum Bursa Kerja Khusus Jawa Timur.'
  },
  {
    title: 'Dynamic Parkour & Jump Mechanics',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Autodesk Maya',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi body mechanics 3D karakter melompati rintangan dengan penekanan pada arc gerakan, antisipasi, dan follow-through.'
  },
  {
    title: 'Character Acting & Dialogue Shot',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi ekspresi wajah, eye-dart, dan lip-sync karakter 3D untuk adegan dialog emosional.'
  },
  {
    title: 'Heavy Weapon Combo Attack Cycle',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Autodesk Maya • Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
    desc: 'Sekuens animasi pertarungan bergaya RPG dengan fokus pada weight, smear frame, dan impact camera.'
  },
  {
    title: 'Stylized Walk & Run Cycle Pack',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Blender',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    desc: 'Kompilasi siklus berjalan dan berlari dengan variasi kepribadian karakter.'
  },
  {
    title: 'Creature Quadruped Locomotion',
    cat: '3d',
    label: '3D ANIMATION',
    tools: 'Autodesk Maya',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&w=800&q=80',
    desc: 'Studi pergerakan anatomi makhluk berkaki empat dari fase walk, trot, hingga gallop.'
  },
  {
    title: '2D Frame-by-Frame Action FX',
    cat: '2d',
    label: '2D ANIMATION',
    tools: 'Digital 2D • After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    desc: 'Animasi efek elemen api, percikan listrik, dan asap secara frame-by-frame.'
  },
  {
    title: '2D Character Turnaround & Animatic',
    cat: '2d',
    label: '2D ANIMATION',
    tools: 'Digital Illustration • CapCut',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    desc: 'Perancangan storyboard animatic dan ekspresi karakter 2D sebelum tahap produksi penuh.'
  },
  {
    title: '2D Sakuga Impact Cut Study',
    cat: '2d',
    label: '2D ANIMATION',
    tools: 'Digital 2D • After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=800&q=80',
    desc: 'Eksplorasi kamera dinamis dan distorsi perspektif pada adegan aksi 2D berkecepatan tinggi.'
  },
  {
    title: '2D Looping Character Vignette',
    cat: '2d',
    label: '2D ANIMATION',
    tools: 'After Effects',
    status: 'Placeholder — Siap Diganti',
    thumb: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    desc: 'Ilustrasi karakter 2D dengan animasi rambut, pencahayaan, dan partikel latar yang berulang mulus.'
  },
  {
    title: 'FLS2N Short Film Production',
    cat: 'multimedia',
    label: 'MULTIMEDIA',
    tools: 'Camera Production • After Effects',
    status: 'Competition Entry',
    thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    desc: 'Produksi film pendek pelajar untuk ajang FLS2N, mencakup sinematografi, penyuntingan, dan color grading.'
  },
  {
    title: 'Klungkung Film Festival Entry',
    cat: 'multimedia',
    label: 'MULTIMEDIA',
    tools: 'Editing • Sound Design',
    status: 'Competition Entry',
    thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    desc: 'Karya film pendek festival yang berfokus pada alur cerita visual dan tata suara sinematik.'
  },
  {
    title: 'Aftermovie HUT SMKN 4 Madiun',
    cat: 'multimedia',
    label: 'MULTIMEDIA',
    tools: 'CapCut • After Effects',
    status: 'OSIS Sekbid 9',
    thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    desc: 'Video dokumentasi dan rekapitulasi acara HUT sekolah bersama tim Sekbid 9 OSIS.'
  },
  {
    title: 'Live Streaming & Multi-Cam Switching',
    cat: 'multimedia',
    label: 'MULTIMEDIA',
    tools: 'Broadcast Switcher • Camera',
    status: 'Event Production',
    thumb: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    desc: 'Pengoperasian kamera produksi dan pengaturan switching siaran langsung untuk event sekolah.'
  },
  {
    title: 'Promotional Teaser — Jurusan Kuliner',
    cat: 'multimedia',
    label: 'MULTIMEDIA',
    tools: 'CapCut • After Effects',
    status: 'OSIS Sekbid 9',
    thumb: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    desc: 'Video promosi profil jurusan kuliner dengan transisi cepat dan penataan visual modern.'
  }
];

const worksGrid = document.getElementById('works-grid');
const tabBtns = document.querySelectorAll('.tab-btn');

function renderWorks(filter = 'all') {
  worksGrid.innerHTML = '';
  const list = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  list.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-front">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
          <div class="flip-front-overlay">
            <span class="card-cat">${item.label}</span>
            <h3>${item.title}</h3>
          </div>
        </div>
        <div class="flip-back">
          <div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <div class="flip-back-meta">${item.tools}</div>
          </div>
          <button class="preview-btn sfx-click">Detail Preview →</button>
        </div>
      </div>
    `;
    card.querySelector('.preview-btn').addEventListener('click', () => openModal(item));
    worksGrid.appendChild(card);
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderWorks(btn.dataset.filter);
  });
});

renderWorks('all');

/* 7. Modal Preview */
const modal = document.getElementById('modal');
function openModal(item) {
  document.getElementById('modal-thumb').src = item.thumb;
  document.getElementById('modal-badge').textContent = item.label;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-desc').textContent = item.desc;
  document.getElementById('modal-tools').textContent = item.tools;
  document.getElementById('modal-status').textContent = item.status;
  modal.classList.add('open');
}
function closeModal() {
  modal.classList.remove('open');
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);

/* 8. Scroll Reveal & Animate Proficiency Bars */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.querySelectorAll('.bar-progress').forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
