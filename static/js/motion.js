/* motion.js: living bear, scroll reveals, homepage ascii field,
   card loop crossfades, and inline loop controls.
   Animates transform and opacity only; honours prefers-reduced-motion. */
(() => {
'use strict';

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(hover: none), (pointer: coarse)').matches;
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

/* ---- 1. The living bear --------------------------------------------- */
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
  eyes.forEach(e => e.style.width = e.getBoundingClientRect().width + 'px');

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

  let blinking = false;
  if (!REDUCED) {
    (function blink() {
      setTimeout(() => {
        blinking = true;
        setTimeout(() => { blinking = false; }, 130);
        blink();
      }, 2400 + Math.random() * 4200);
    })();
  }

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

/* ---- 2. Scroll reveals ---------------------------------------------- */
function initReveals() {
  if (REDUCED || !('IntersectionObserver' in window)) return;
  const targets = [
    ...document.querySelectorAll('[data-reveal]'),
    ...document.querySelectorAll('.content > figure, .content > .media-pair')
  ];
  const unique = [...new Set(targets)];
  const below = unique.filter(el => el.getBoundingClientRect().top > innerHeight * 0.96);
  if (!below.length) return;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -36px 0px' });
  below.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

/* ---- 3. The ASCII field (metaball backdrop) ------------------------- */
function initField() {
  const cv = document.getElementById('ascii-bg');
  if (!cv || innerWidth < 760) return;
  const ctx = cv.getContext('2d');
  const dpr = devicePixelRatio || 1;
  const CHARS = ' ··0011';
  const CELL = 9;
  const VOL = cv.hasAttribute('data-quiet') ? 0.5 : 1;

  function size() {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const mouse = { x: -1e4, y: -1e4 };
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  let mouseWeight = 0;

  function draw(t, dt) {
    const w = innerWidth, h = innerHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.font = `${CELL * 0.9}px "IBM Plex Mono", ui-monospace, Menlo, monospace`;
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
          ? `rgba(210, 28, 28, ${(0.10 + v * 0.26) * VOL})`
          : `rgba(17, 17, 17, ${(0.035 + v * 0.075) * VOL})`;
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
    const fade = clamp(1 - scrollY / (innerHeight * 0.85), 0, 1);
    cv.style.opacity = fade.toFixed(2);
    if (document.hidden || fade === 0) return;
    draw((now - t0) / 1000, dt);
  })(t0);
}

/* ---- 4. Card still -> video loop crossfade -------------------------- */
function initCardLoops() {
  if (REDUCED) return;
  const mediaEls = document.querySelectorAll('.card-media.has-loop');
  if (!mediaEls.length) return;

  function loadAndPlay(box, vid) {
    if (!vid.src && vid.dataset.src) {
      vid.src = vid.dataset.src;
    }
    const p = vid.play();
    if (p && typeof p.then === 'function') {
      p.then(() => box.classList.add('is-playing')).catch(() => {});
    } else {
      box.classList.add('is-playing');
    }
  }

  function stopAndHide(box, vid) {
    box.classList.remove('is-playing');
    vid.pause();
  }

  if (COARSE && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        const vid = e.target.querySelector('video.card-loop');
        if (!vid) continue;
        if (e.isIntersecting) loadAndPlay(e.target, vid);
        else stopAndHide(e.target, vid);
      }
    }, { threshold: 0.6 });
    mediaEls.forEach(box => io.observe(box));
    return;
  }

  mediaEls.forEach(box => {
    const card = box.closest('.project-card-link') || box;
    const vid = box.querySelector('video.card-loop');
    if (!vid) return;
    card.addEventListener('pointerenter', () => loadAndPlay(box, vid));
    card.addEventListener('pointerleave', () => stopAndHide(box, vid));
    card.addEventListener('focusin', () => loadAndPlay(box, vid));
    card.addEventListener('focusout', () => stopAndHide(box, vid));
  });
}

/* ---- 5. Case-study inline video pause/play controls ----------------- */
function initMediaControls() {
  document.querySelectorAll('.video-frame').forEach(frame => {
    const vid = frame.querySelector('video.inline-loop');
    const btn = frame.querySelector('.loop-toggle');
    if (!vid || !btn) return;

    function sync() {
      const paused = vid.paused;
      btn.textContent = paused ? 'play' : 'pause';
      btn.setAttribute('aria-pressed', String(paused));
      btn.setAttribute('aria-label', paused ? 'Play video loop' : 'Pause video loop');
    }

    if (REDUCED) {
      vid.removeAttribute('autoplay');
      vid.pause();
    }
    sync();

    btn.addEventListener('click', () => {
      if (vid.paused) vid.play().then(sync).catch(sync);
      else { vid.pause(); sync(); }
    });
    vid.addEventListener('play', sync);
    vid.addEventListener('pause', sync);
  });
}

initBear();
initReveals();
initField();
initCardLoops();
initMediaControls();

})();
