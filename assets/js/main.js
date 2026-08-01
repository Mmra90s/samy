/**
 * Royal Glassmorphism — Wedding Invitation
 * Gate screen, navigation, countdown, particles, animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. GATE SCREEN =====
  const gateScreen = document.getElementById('gateScreen');
  const mainContent = document.getElementById('mainContent');
  const envelopeWrapper = document.getElementById('envelopeWrapper');

  if (gateScreen && envelopeWrapper) {
    function openGate() {
      gateScreen.classList.add('opening');
      setTimeout(() => {
        gateScreen.style.display = 'none';
        mainContent.style.display = 'block';
        // Show nav bar
        const navBar = document.getElementById('navBar');
        if (navBar) navBar.classList.add('visible');
        // Init everything
        initAOS();
        initParticles();
        startCountdown();
        setupTiltEffect();
      }, 1000);
    }

    envelopeWrapper.addEventListener('click', openGate);
    gateScreen.addEventListener('click', (e) => {
      if (e.target === gateScreen || e.target.classList.contains('gate-bg-layer')) {
        openGate();
      }
    });
  }

  // ===== 2. POPULATE CONTENT =====
  populateContent();

  // ===== 3. BUILD TIMELINE =====
  buildTimeline();

  // ===== 4. BUILD GALLERY =====
  buildGallery();

  // ===== 5. CALENDAR LINK =====
  setupCalendarLink();

  // ===== 6. MAP LINK =====
  setupMapLink();

  // ===== 7. CURSOR GLOW =====
  setupCursorGlow();

  // ===== 8. NAV ACTIVE STATE =====
  setupNavActive();

  // ===== 9. PARALLAX =====
  setupParallax();

  // ===== 10. SCROLL TO TOP =====
  setupScrollTo();
});

/* ===== AOS INIT ===== */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }
}

/* ===== PARTICLES ===== */
function initParticles() {
  if (typeof particlesJS === 'undefined') return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 1200 } },
      color: { value: ['#d4a574', '#b76e79', '#f7e7ce'] },
      shape: { type: 'circle' },
      opacity: { value: 0.25, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.05 } },
      size: { value: 2, random: true, anim: { enable: true, speed: 1.2, size_min: 0.3 } },
      line_linked: { enable: true, distance: 130, color: '#d4a574', opacity: 0.05, width: 0.5 },
      move: { enable: true, speed: 0.4, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    retina_detect: true
  });
}

/* ===== POPULATE CONTENT ===== */
function populateContent() {
  if (!WEDDING_CONFIG) return;
  const c = WEDDING_CONFIG;

  // Title
  if (c.couple.pageTitle) {
    document.title = c.couple.pageTitle;
    const pt = document.getElementById('page-title');
    if (pt) pt.textContent = c.couple.pageTitle;
  }

  // Hero names
  const names = document.querySelectorAll('.couple-names .name');
  if (names[0]) names[0].textContent = c.couple.bride;
  if (names[1]) names[1].textContent = c.couple.groom;

  // Gate names
  const gateN = document.querySelectorAll('.gate-bname, .gate-gname');
  if (gateN[0]) gateN[0].textContent = c.couple.bride;
  if (gateN[1]) gateN[1].textContent = c.couple.groom;

  // Signature
  const sb = document.getElementById('sig-bride');
  const sg = document.getElementById('sig-groom');
  if (sb) sb.textContent = c.couple.bride;
  if (sg) sg.textContent = c.couple.groom;

  // Ayah
  const at = document.getElementById('ayah-text');
  const ar = document.getElementById('ayah-ref');
  if (at) at.textContent = c.ayah.text;
  if (ar) ar.textContent = c.ayah.reference;

  // Invite
  const it = document.getElementById('invite-text');
  if (it) it.textContent = c.inviteText;

  // Date
  const dd = document.getElementById('date-display');
  if (dd) dd.textContent = c.event.dateDisplay;

  // Location
  const ln = document.getElementById('location-name');
  if (ln) ln.textContent = c.location.name;

  // Seal initials
  const sealEl = document.querySelector('.seal-initials');
  if (sealEl) sealEl.textContent = c.couple.bride.charAt(0) + '.' + c.couple.groom.charAt(0);
}

/* ===== BUILD TIMELINE ===== */
function buildTimeline() {
  if (!WEDDING_CONFIG || !WEDDING_CONFIG.timeline) return;
  const timeline = document.querySelector('.timeline');

  WEDDING_CONFIG.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-duration', '1000');
    div.setAttribute('data-aos-delay', (i * 150).toString());
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>`;
    timeline.appendChild(div);
  });
}

/* ===== BUILD GALLERY ===== */
function buildGallery() {
  if (!WEDDING_CONFIG || !WEDDING_CONFIG.gallery) return;
  const grid = document.querySelector('.gallery-grid');

  WEDDING_CONFIG.gallery.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('data-aos', 'zoom-in');
    div.setAttribute('data-aos-duration', '800');
    div.setAttribute('data-aos-delay', (i * 100).toString());
    div.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'>صوركم هنا</div>'">`;
    grid.appendChild(div);
  });
}

/* ===== COUNTDOWN ===== */
function startCountdown() {
  if (!WEDDING_CONFIG || !WEDDING_CONFIG.event || !WEDDING_CONFIG.event.dateISO) return;
  const target = new Date(WEDDING_CONFIG.event.dateISO).getTime();

  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      ['cd-days','cd-hours','cd-minutes','cd-seconds'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '00';
      });
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const el = id => document.getElementById(id);
    if (el('cd-days')) el('cd-days').textContent = String(d).padStart(2,'0');
    if (el('cd-hours')) el('cd-hours').textContent = String(h).padStart(2,'0');
    if (el('cd-minutes')) el('cd-minutes').textContent = String(m).padStart(2,'0');
    if (el('cd-seconds')) el('cd-seconds').textContent = String(s).padStart(2,'0');
  }

  update();
  setInterval(update, 1000);
}

/* ===== CALENDAR ===== */
function setupCalendarLink() {
  if (!WEDDING_CONFIG?.event?.dateISO) return;
  const btn = document.getElementById('add-calendar');
  const start = new Date(WEDDING_CONFIG.event.dateISO);
  const end = new Date(start.getTime() + (WEDDING_CONFIG.event.durationHours || 4) * 3600000);
  const fmt = d => d.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
  btn.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(WEDDING_CONFIG.couple.bride + ' و ' + WEDDING_CONFIG.couple.groom + ' — حفل الزفاف')}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent(WEDDING_CONFIG.inviteText)}&location=${encodeURIComponent(WEDDING_CONFIG.location.name)}`;
  btn.target = '_blank';
}

/* ===== MAP ===== */
function setupMapLink() {
  if (!WEDDING_CONFIG?.location?.mapQuery) return;
  const btn = document.getElementById('location-map');
  btn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING_CONFIG.location.mapQuery)}`;
}

/* ===== CURSOR GLOW ===== */
function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.innerWidth <= 768) return;
  let mx = 0, my = 0, gx = 0, gy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function anim() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(anim);
  }
  anim();
}

/* ===== NAV ACTIVE STATE ===== */
function setupNavActive() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActive() {
    const scrollY = window.scrollY + window.innerHeight / 3;
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      links.forEach(link => {
        if (link.getAttribute('data-section') === id) {
          link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
      });
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

/* ===== TILT EFFECT ===== */
function setupTiltEffect() {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = (y - cy) / 40;
      const ry = (cx - x) / 40;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ===== PARALLAX ===== */
function setupParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bg = document.querySelector('.hero-bg-layer');
    if (bg) bg.style.transform = `translateY(${scrolled * 0.2}px)`;

    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((s, i) => {
      s.style.transform = `translateY(${scrolled * 0.02 * (i+1)}px)`;
    });
  }, { passive: true });
}

/* ===== SCROLL TO ===== */
function setupScrollTo() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const inv = document.getElementById('invitation');
      if (inv) inv.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
