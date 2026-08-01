/* ============================================================
 *  Royal Glassmorphism — Ultra Luxury Wedding Invitation
 *  Fonts: Loaded from Google Fonts (CDN) + Local fallback
 *  All elements properly centered, Gate screen on load
 * ============================================================ */

/* ===== FONT FACE - LOCAL ===== */
@font-face {
  font-family: 'Amiri';
  src: url('../fonts/amiri-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Amiri';
  src: url('../fonts/amiri-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'El Messiri';
  src: url('../fonts/elmessiri-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'El Messiri';
  src: url('../fonts/elmessiri-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Aref Ruqaa';
  src: url('../fonts/arefruqaa.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Tajawal';
  src: url('../fonts/tajawal-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Tajawal';
  src: url('../fonts/tajawal-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Playfair Display';
  src: url('../fonts/playfair-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Playfair Display';
  src: url('../fonts/playfair-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('../fonts/cormorant.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

/* ===== CSS VARIABLES ===== */
:root {
  --bg-1: #0d0d1a;
  --bg-2: #1a0a2e;
  --bg-3: #16213e;
  --gold: #d4a574;
  --rose-gold: #b76e79;
  --champagne: #f7e7ce;
  --text-primary: #f5f0eb;
  --text-secondary: #c9b896;
  --text-muted: #7a6f5e;
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(212, 165, 116, 0.12);
  --glass-blur: 20px;
  --gold-glow: rgba(212, 165, 116, 0.2);
  --rose-glow: rgba(183, 110, 121, 0.15);
  --font-body: 'Tajawal', 'El Messiri', sans-serif;
  --font-display: 'El Messiri', 'Tajawal', sans-serif;
  --font-quran: 'Amiri', serif;
  --font-calligraphy: 'Aref Ruqaa', serif;
  --font-heading: 'Playfair Display', serif;
  --font-elegant: 'Cormorant Garamond', serif;
  --radius: 20px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ===== RESET ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: var(--font-body);
  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-3) 50%, var(--bg-1) 100%);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.8;
  direction: rtl;
}

/* ===== GATE SCREEN ===== */
.gate-screen {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 50%, #16213e 100%);
  transition: all 1s var(--ease);
}
.gate-screen.opening {
  opacity: 0;
  transform: scale(1.05);
  pointer-events: none;
  visibility: hidden;
}

.gate-bg-layer {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 30% 20%, rgba(183,110,121,0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(212,165,116,0.08) 0%, transparent 50%);
}

.gate-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.gate-ornament {
  opacity: 0.5;
}

/* Envelope */
.envelope-wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.envelope {
  position: relative;
  width: 200px;
  height: 140px;
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid rgba(212, 165, 116, 0.25);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}

.envelope:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(212, 165, 116, 0.15);
}

.envelope-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, rgba(212,165,116,0.15) 0%, transparent 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}

.envelope-card {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 45px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(212,165,116,0.1);
  border-radius: 6px;
}

.wax-seal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65px;
  height: 65px;
  background: radial-gradient(circle at 35% 35%, #d44, #a02020 50%, #7a1515 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 20px rgba(160, 32, 32, 0.5),
    inset 0 2px 4px rgba(255,255,255,0.2),
    inset 0 -2px 4px rgba(0,0,0,0.4);
  z-index: 3;
  animation: sealGlow 3s ease-in-out infinite;
}

.wax-seal .seal-initials {
  font-family: var(--font-calligraphy);
  color: var(--champagne);
  font-size: 0.9rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

@keyframes sealGlow {
  0%, 100% { box-shadow: 0 4px 20px rgba(160,32,32,0.4), inset 0 2px 4px rgba(255,255,255,0.2); }
  50% { box-shadow: 0 4px 30px rgba(160,32,32,0.7), inset 0 2px 4px rgba(255,255,255,0.3); }
}

.open-hint {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--gold);
  opacity: 0.6;
  animation: pulseText 2.5s ease-in-out infinite;
}

@keyframes pulseText {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.9; }
}

/* Gate Names */
.gate-names {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.gate-bname, .gate-gname {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--champagne), var(--gold), var(--rose-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 25px var(--gold-glow));
}

.gate-amp {
  font-family: var(--font-elegant);
  font-size: 1.8rem;
  color: var(--rose-gold);
  opacity: 0.5;
}

/* ===== NAVIGATION BAR ===== */
.nav-bar {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s var(--ease);
}

.nav-bar.visible {
  opacity: 1;
  visibility: visible;
}

.nav-glass {
  background: rgba(15, 15, 30, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 165, 116, 0.15);
  border-radius: 50px;
  padding: 0.6rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 0.5rem 0.8rem;
  border-radius: 40px;
  text-decoration: none;
  color: var(--text-muted);
  transition: all 0.3s var(--ease);
  position: relative;
}

.nav-link .nav-icon {
  font-size: 1.1rem;
  line-height: 1;
}

.nav-link .nav-label {
  font-size: 0.6rem;
  font-family: var(--font-display);
  font-weight: 400;
}

.nav-link:hover {
  color: var(--gold);
  background: rgba(212, 165, 116, 0.1);
}

.nav-link.active {
  color: var(--gold);
  background: rgba(212, 165, 116, 0.15);
  border: 1px solid rgba(212, 165, 116, 0.25);
}

/* ===== PARTICLES ===== */
#particles-js {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* ===== FLOATING SHAPES ===== */
.floating-shapes {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.1;
  animation: floatShape 30s ease-in-out infinite;
}

.shape-1 { width: 500px; height: 500px; background: var(--rose-gold); top: 5%; right: -150px; animation-delay: 0s; }
.shape-2 { width: 350px; height: 350px; background: var(--gold); top: 40%; left: -100px; animation-delay: -8s; }
.shape-3 { width: 400px; height: 400px; background: var(--rose-gold); bottom: 15%; right: 15%; animation-delay: -16s; }
.shape-4 { width: 300px; height: 300px; background: var(--gold); bottom: 5%; left: 10%; animation-delay: -24s; }

@keyframes floatShape {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -40px) scale(1.05); }
  66% { transform: translate(-30px, 30px) scale(0.95); }
}

/* ===== CURSOR GLOW ===== */
.cursor-glow {
  position: fixed;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,165,116,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
  transform: translate(-50%, -50%);
  display: none;
}

@media (min-width: 769px) {
  .cursor-glow { display: block; }
}

/* ===== MAIN CONTENT ===== */
.main-content {
  position: relative;
  z-index: 2;
}

/* ===== HERO ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-layer {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 25% 30%, rgba(183,110,121,0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 70%, rgba(212,165,116,0.06) 0%, transparent 50%),
    linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
}

.hero-deco {
  margin-bottom: 1rem;
}

.bismillah {
  margin: 1.5rem 0;
}

.bismillah span {
  font-family: var(--font-calligraphy);
  font-size: 1.5rem;
  color: var(--champagne);
  opacity: 0.8;
}

.couple-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.couple-names .name {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--champagne) 0%, var(--gold) 50%, var(--rose-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 35px var(--gold-glow));
}

.couple-names .ampersand {
  font-family: var(--font-elegant);
  font-size: 2.5rem;
  color: var(--rose-gold);
  opacity: 0.5;
  font-weight: 300;
}

.hero-subtitle {
  margin-top: 1rem;
}

.hero-subtitle span {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 300;
  letter-spacing: 1px;
}

/* Scroll indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3rem;
  cursor: pointer;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--gold);
  border-radius: 12px;
  opacity: 0.5;
  position: relative;
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--gold);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { top: 6px; opacity: 1; }
  100% { top: 22px; opacity: 0; }
}

.scroll-indicator span {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 3px;
}

/* ===== SECTIONS ===== */
section {
  padding: 5rem 1.5rem;
}

.section-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--champagne);
  font-weight: 600;
  margin-bottom: 3rem;
  display: inline-block;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

/* ===== GLASS CARDS ===== */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  transition: all 0.5s var(--ease);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px var(--gold-glow);
  border-color: rgba(212,165,116,0.25);
}

.card-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
  animation: shimmer 8s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { left: -100%; }
  50% { left: 100%; }
}

/* ===== INVITATION ===== */
.invitation-section { padding-top: 6rem; }

.ayah-box {
  position: relative;
  padding: 2.5rem 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(212,165,116,0.15);
  border-radius: 16px;
  background: rgba(212,165,116,0.02);
}

.ayah-corner {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1.5px solid var(--gold);
  opacity: 0.35;
}

.ayah-corner.top-right {
  top: -1px;
  right: 15px;
  border-left: none;
  border-bottom: none;
}

.ayah-corner.bottom-left {
  bottom: -1px;
  left: 15px;
  border-right: none;
  border-top: none;
}

.ayah-text {
  font-family: var(--font-quran);
  font-size: 1.4rem;
  line-height: 2.5;
  color: var(--champagne);
}

.ayah-ref {
  display: block;
  margin-top: 1rem;
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--gold);
}

.invite-message { margin: 2rem 0; }

.invite-message p {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 2.2;
}

.couple-signature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.sig-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--gold), var(--rose-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sig-and {
  font-family: var(--font-elegant);
  font-size: 1rem;
  color: var(--text-muted);
}

/* ===== DATE ===== */
.date-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.date-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  background: rgba(212,165,116,0.08);
  border: 1px solid rgba(212,165,116,0.25);
  border-radius: 50%;
}

.date-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.date-text {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--champagne);
  font-weight: 600;
}

.time-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 300;
}

/* Countdown */
.countdown-container { margin: 3rem 0; }

.countdown-container h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 1.2rem;
}

.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem;
  min-width: 70px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}

.count-number {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--gold);
}

.count-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 300;
}

.countdown-separator {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--gold);
  opacity: 0.4;
}

/* ===== TIMELINE ===== */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--gold), var(--rose-gold), var(--gold), transparent);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  padding-left: calc(50% + 2rem);
  text-align: right;
}

.timeline-item:nth-child(even) {
  padding-right: calc(50% + 2rem);
  text-align: left;
}

.timeline-dot {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gold);
  border: 3px solid var(--bg-1);
  box-shadow: 0 0 12px var(--gold-glow);
  z-index: 2;
}

.timeline-content {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 1.2rem;
  transition: all 0.4s var(--ease);
}

.timeline-content:hover {
  background: rgba(212,165,116,0.06);
  border-color: rgba(212,165,116,0.25);
  transform: translateY(-3px);
}

.timeline-time {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--gold);
  margin-bottom: 0.3rem;
}

.timeline-title {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
}

.timeline-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

/* ===== GALLERY ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  max-width: 750px;
  margin: 0 auto;
}

.gallery-item {
  aspect-ratio: 4/3;
  border-radius: 16px;
  overflow: hidden;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  transition: all 0.5s var(--ease);
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  border-color: rgba(212,165,116,0.3);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-item .gallery-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(212,165,116,0.2);
  border-radius: 16px;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 0.9rem;
}

/* ===== LOCATION ===== */
.location-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.location-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  background: rgba(212,165,116,0.08);
  border: 1px solid rgba(212,165,116,0.25);
  border-radius: 50%;
}

.location-details h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--champagne);
  font-weight: 500;
}

/* ===== BUTTONS ===== */
.btn-glass {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  background: rgba(212,165,116,0.08);
  border: 1px solid rgba(212,165,116,0.25);
  border-radius: 50px;
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s var(--ease);
  backdrop-filter: blur(10px);
}

.btn-glass:hover {
  background: rgba(212,165,116,0.15);
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--gold-glow);
  color: var(--champagne);
}

/* ===== FOOTER ===== */
.site-footer {
  padding: 3rem 1.5rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.site-footer p {
  font-family: var(--font-elegant);
  font-size: 1.1rem;
  color: var(--text-muted);
  font-style: italic;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  section { padding: 3.5rem 1rem; }
  
  .glass-card { padding: 2rem 1.2rem; border-radius: 16px; }
  
  .couple-names .name { font-size: clamp(2.5rem, 12vw, 4rem); }
  
  /* Timeline mobile */
  .timeline-line { right: 18px; transform: none; }
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    padding-left: 3rem;
    padding-right: 0;
    text-align: right;
  }
  .timeline-dot { right: 18px; transform: none; }
  
  .date-display { flex-direction: column; }
  
  .countdown-item { min-width: 60px; padding: 0.7rem; }
  .count-number { font-size: 1.4rem; }
  
  .gallery-grid { grid-template-columns: 1fr; }
  
  /* Nav mobile */
  .nav-glass { padding: 0.4rem; }
  .nav-link { padding: 0.4rem 0.6rem; }
  .nav-link .nav-label { font-size: 0.5rem; }
  .nav-link .nav-icon { font-size: 0.95rem; }
  
  .envelope { width: 160px; height: 110px; }
  .wax-seal { width: 50px; height: 50px; }
  .wax-seal .seal-initials { font-size: 0.75rem; }
}

@media (max-width: 480px) {
  .couple-names .name { font-size: clamp(2rem, 14vw, 3rem); }
  .section-title { font-size: 1.5rem; }
  .gate-bname, .gate-gname { font-size: clamp(2rem, 10vw, 3rem); }
  
  .nav-bar { bottom: 0.8rem; }
}
