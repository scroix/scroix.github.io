/* motion.js — the studies that shipped from the animation lab:
   the living bear (and its echo in the tab), the returning header,
   scroll reveals, and the homepage ascii field. Everything in-page
   animates transform/opacity only and honours reduced-motion. */
(() => {
'use strict';

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

class Spring {
  constructor(k, c, x) { this.k = k; this.c = c; this.x = x; this.v = 0; this.target = x; }
  step(dt) {
    dt = Math.min(dt, 0.032);
    this.v += (-this.k * (this.x - this.target) - this.c * this.v) * dt;
    this.x += this.v * dt;
    return this.x;
  }
}

/* ---- the living bear ------------------------------------------------ */
function initBear() {
  const el = document.querySelector('header .bear');
  if (!el || !el.textContent.includes('ᴥ')) return;

  const glyphs = [...el.textContent.trim()];
  el.textContent = '';
  const eyes = [];
  for (const g of glyphs) {
    const s = document.createElement('span');
    s.className = 'bear-glyph';
    s.textContent = g;
    if (g === '•') { s.classList.add('bear-eye'); eyes.push(s); }
    el.appendChild(s);
  }
  if (!eyes.length) return;
  // lock each eye at its natural width so the hover squint can't nudge the layout
  eyes.forEach(e => e.style.width = e.getBoundingClientRect().width + 'px');

  // ᵔ is a modifier letter — whatever font supplies it seats it high, like a
  // superscript. Measure both glyphs and derive the transform that centres the
  // squint exactly where the eye was, instead of trusting glyph metrics.
  const squint = { dy: 0, s: 1 };
  {
    const cs = getComputedStyle(eyes[0]);
    const m = document.createElement('canvas').getContext('2d');
    m.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const dot = m.measureText('•');
    const arc = m.measureText('ᵔ');
    if ('actualBoundingBoxAscent' in dot && arc.width > 0) {
      const mid = t => (t.actualBoundingBoxAscent - t.actualBoundingBoxDescent) / 2;
      squint.dy = mid(arc) - mid(dot);
      squint.s = clamp(dot.width * 1.2 / arc.width, 0.7, 1.5);
    }
  }

  // the tab bear blinks on the same clock: the favicon svg carries both
  // eye states, so a blink is one style swap on the same artwork. browsers
  // without dynamic-favicon support (safari) just keep the open eyes.
  const tab = { shut() {}, open() {} };
  {
    const fav = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (fav) {
      const rest = fav.href;
      fetch(rest).then(r => r.text()).then(svg => {
        const shut = 'data:image/svg+xml,'
          + encodeURIComponent(svg.replace('.lid{display:none}', '.eye{display:none}'));
        tab.shut = () => fav.setAttribute('href', shut);
        tab.open = () => fav.setAttribute('href', rest);
      }).catch(() => {});
    }
  }

  let blinking = false;
  (function blink() {
    setTimeout(() => {
      blinking = true; tab.shut();
      setTimeout(() => { blinking = false; tab.open(); }, 130);
      blink();
    }, 2400 + Math.random() * 4200);
  })();

  // while hovered the bear squints and its eyes settle back to centre —
  // squinting eyes shouldn't keep darting around
  let hovered = false;
  const home = el.closest('a') || el;
  home.addEventListener('pointerenter', () => { hovered = true; eyes.forEach(e => e.textContent = 'ᵔ'); });
  home.addEventListener('pointerleave', () => { hovered = false; eyes.forEach(e => e.textContent = '•'); });

  const sx = new Spring(120, 16, 0);
  const sy = new Spring(120, 16, 0);
  const cursor = { x: innerWidth / 2, y: 0 };
  addEventListener('pointermove', e => { cursor.x = e.clientX; cursor.y = e.clientY; });

  let last = performance.now();
  (function frame(now) {
    requestAnimationFrame(frame);
    const dt = (now - last) / 1000; last = now;
    if (!REDUCED) {
      if (hovered) {
        sx.target = 0;
        sy.target = 0;
      } else {
        const r = el.getBoundingClientRect();
        const fs = parseFloat(getComputedStyle(el).fontSize);
        const max = clamp(fs * 0.09, 1, 3);
        const dx = cursor.x - (r.left + r.width / 2);
        const dy = cursor.y - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        sx.target = (dx / d) * max * Math.min(1, d / 60);
        sy.target = (dy / d) * max * Math.min(1, d / 60);
      }
      sx.step(dt); sy.step(dt);
    }
    const t = `translate(${sx.x.toFixed(2)}px, ${sy.x.toFixed(2)}px) scaleY(${blinking && !hovered ? 0.12 : 1})`
      + (hovered ? ` translateY(${squint.dy.toFixed(2)}px) scale(${squint.s.toFixed(3)})` : '');
    for (const e of eyes) if (e.style.transform !== t) e.style.transform = t;
  })(last);
}

/* ---- the returning header -------------------------------------------- */
function initHeader() {
  const el = document.querySelector('header');
  if (!el) return;
  // measured once, not per scroll tick — a layout read inside the handler
  // would force a reflow against the class writes below
  let threshold = el.offsetHeight * 1.5;
  addEventListener('resize', () => { threshold = el.offsetHeight * 1.5; });
  let last = scrollY;
  addEventListener('scroll', () => {
    const y = Math.max(0, scrollY);
    const dy = y - last;
    last = y;
    // near the top the header simply belongs there; past it, it ducks away
    // downhill and returns the moment the visitor turns around
    if (y < threshold) el.classList.remove('away');
    else if (dy > 0) el.classList.add('away');
    else if (dy < -3) el.classList.remove('away');
    el.classList.toggle('floating', y > 4);
  }, { passive: true });
  // keyboard visitors tabbing into the nav deserve to see it too
  el.addEventListener('focusin', () => el.classList.remove('away'));
}

/* ---- footnotes: hovering a mark lights its note, and back ------------ */
function initFootnotes() {
  document.querySelectorAll('[data-fn]').forEach(el => {
    const twins = () => document.querySelectorAll(`[data-fn="${el.dataset.fn}"]`);
    el.addEventListener('mouseenter', () => twins().forEach(t => t.classList.add('lit')));
    el.addEventListener('mouseleave', () => twins().forEach(t => t.classList.remove('lit')));
  });
}

/* ---- scroll reveals -------------------------------------------------- */
function initReveals() {
  if (REDUCED || !('IntersectionObserver' in window)) return;
  const blocks = [...document.querySelectorAll('.content > *')]
    .filter(el => el.tagName !== 'BR');
  // only blocks below the fold get the treatment — nothing already
  // visible should move on page load
  const below = blocks.filter(el => el.getBoundingClientRect().top > innerHeight);
  if (!below.length) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -40px 0px' });
  below.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

/* ---- the ascii field (homepage backdrop) ----------------------------- */
function initField() {
  const cv = document.getElementById('ascii-bg');
  if (!cv || innerWidth < 760) return;
  const ctx = cv.getContext('2d');
  const dpr = devicePixelRatio || 1;
  const CHARS = ' ··0011';
  const CELL = 9;
  // content pages carry data-quiet: same field, turned down so it never
  // competes with reading
  const VOL = cv.hasAttribute('data-quiet') ? 0.55 : 1;

  function size() {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const mouse = { x: -1e4, y: -1e4 };
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  // the cursor is not an attractor of its own — it only energises the field
  // when it comes close to one of the drifting blobs
  let mouseWeight = 0;

  function draw(t, dt) {
    const w = innerWidth, h = innerHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.font = `${CELL * 0.9}px ui-monospace, Menlo, monospace`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const balls = [
      [w * (0.5 + 0.38 * Math.sin(t * 0.21)), h * (0.45 + 0.32 * Math.cos(t * 0.16)), 150],
      [w * (0.5 + 0.33 * Math.cos(t * 0.13 + 2.4)), h * (0.5 + 0.34 * Math.sin(t * 0.19 + 0.8)), 120],
    ];
    let nearest = Infinity;
    for (const [bx, by, br] of balls) {
      nearest = Math.min(nearest, Math.hypot(mouse.x - bx, mouse.y - by) / br);
    }
    // full strength inside 1.2 radii, nothing beyond 2.2 — eased over time
    const engaged = clamp(2.2 - nearest, 0, 1);
    mouseWeight += (engaged - mouseWeight) * Math.min(1, dt * 5);
    if (mouseWeight > 0.02) balls.push([mouse.x, mouse.y, 90 * mouseWeight]);

    for (let y = CELL / 2; y < h; y += CELL) {
      for (let x = CELL / 2; x < w; x += CELL) {
        let v = 0;
        for (const [bx, by, br] of balls) {
          const dx = x - bx, dy = y - by;
          v += (br * br) / (dx * dx + dy * dy + br * br * 0.3);
        }
        v = clamp(v * 0.5 - 0.2, 0, 1);
        const idx = Math.min(CHARS.length - 1, (v * CHARS.length) | 0);
        if (idx === 0) continue;
        ctx.fillStyle = v > 0.78
          ? `rgba(210, 28, 28, ${(0.10 + v * 0.28) * VOL})`
          : `rgba(17, 17, 17, ${(0.04 + v * 0.08) * VOL})`;
        ctx.fillText(CHARS[idx], x, y);
      }
    }
  }

  size();
  addEventListener('resize', () => { size(); if (REDUCED) draw(2.5, 0); });

  if (REDUCED) { draw(2.5, 0); return; }

  const t0 = performance.now();
  let last = t0;
  (function frame(now) {
    requestAnimationFrame(frame);
    const dt = (now - last) / 1000; last = now;
    // fade the field away as the visitor starts reading
    const fade = clamp(1 - scrollY / (innerHeight * 0.8), 0, 1);
    cv.style.opacity = fade.toFixed(2);
    if (document.hidden || fade === 0) return;
    draw((now - t0) / 1000, dt);
  })(t0);
}

initBear();
initHeader();
initFootnotes();
initReveals();
initField();

})();
