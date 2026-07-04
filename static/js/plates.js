/* plates.js — the plate viewer and the photo piles.
   Any .print marked data-view opens full size in the viewer; prints in the
   same entry form one group, so ‹ › leafs through an entry's evidence.
   Piles deal their top print to the back on click. */
(() => {
'use strict';

const viewer = document.getElementById('plate-viewer');
if (!viewer) return;

const mediaBox = viewer.querySelector('.media');
const capEl = viewer.querySelector('.cap');
const idxEl = viewer.querySelector('.idx');
let group = [], at = 0;

const itemOf = p => ({
  src: p.dataset.full || p.querySelector('img')?.src,
  youtube: p.dataset.youtube,
  caption: p.querySelector('figcaption')?.textContent || ''
});

function render() {
  const item = group[at];
  mediaBox.innerHTML = item.youtube
    ? `<iframe src="https://www.youtube.com/embed/${item.youtube}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen title="${item.caption}"></iframe>`
    : `<img src="${item.src}" alt="${item.caption}">`;
  capEl.textContent = item.caption;
  idxEl.textContent = group.length > 1 ? `${at + 1} / ${group.length}` : '';
  viewer.querySelector('.prev').hidden = group.length < 2;
  viewer.querySelector('.next').hidden = group.length < 2;
}

function open(startPrint) {
  const scope = startPrint.closest('.entry') || startPrint;
  const prints = [...scope.querySelectorAll('[data-view]')];
  group = prints.map(itemOf);
  at = Math.max(0, prints.indexOf(startPrint));
  render();
  viewer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close() {
  viewer.classList.remove('open');
  mediaBox.innerHTML = ''; /* stops any playing film */
  document.body.style.overflow = '';
}

const step = d => { at = (at + d + group.length) % group.length; render(); };

viewer.querySelector('.close').addEventListener('click', close);
viewer.querySelector('.prev').addEventListener('click', () => step(-1));
viewer.querySelector('.next').addEventListener('click', () => step(1));
viewer.addEventListener('click', e => { if (e.target === viewer) close(); });
addEventListener('keydown', e => {
  if (!viewer.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

/* prints outside a pile open the viewer directly */
document.querySelectorAll('[data-view]').forEach(p => {
  if (p.closest('.pile')) return;
  p.addEventListener('click', () => open(p));
});

/* piles: click deals the top print to the back; "enlarge" opens the viewer */
document.querySelectorAll('.pile').forEach(pile => {
  let dealing = false;
  pile.addEventListener('click', () => {
    if (dealing) return;
    dealing = true;
    const prints = [...pile.querySelectorAll('.print')];
    const top = prints.find(p => p.dataset.depth === '0');
    top.classList.add('dealing');
    setTimeout(() => {
      prints.forEach(p => {
        p.dataset.depth = (Number(p.dataset.depth) + prints.length - 1) % prints.length;
      });
      top.classList.remove('dealing');
      dealing = false;
    }, 380);
  });
  const enlarge = pile.parentElement.querySelector('.pile-hint .enlarge');
  if (enlarge) enlarge.addEventListener('click', e => {
    e.preventDefault();
    open(pile.querySelector('.print[data-depth="0"]'));
  });
});

})();
