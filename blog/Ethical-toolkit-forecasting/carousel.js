/* The carousel uses linked local image files. Replacing a PNG with the same
   filename automatically updates both the large image and its thumbnail. */
(() => {
  const carousel = document.getElementById('toolkit-carousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.toolkit-slide')];
  const thumbnails = [...document.querySelectorAll('.worksheet-thumbnail')];
  const position = document.getElementById('gallery-position');
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  if (!slides.length) return;
  let active = 0;
  const show = (index, focusThumb = false) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== active;
    });
    thumbnails.forEach((btn, i) => {
      btn.classList.toggle('is-active', i === active);
      btn.setAttribute('aria-pressed', String(i === active));
    });
    const count = String(active + 1).padStart(2, '0');
    position.innerHTML = `${count} <span>/ ${String(slides.length).padStart(2, '0')}</span>`;
    if (focusThumb) thumbnails[active]?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'nearest'});
  };
  prev?.addEventListener('click', () => show(active-1));
  next?.addEventListener('click', () => show(active+1));
  thumbnails.forEach((btn,i) => btn.addEventListener('click', () => show(i)));
  carousel.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowRight') { ev.preventDefault(); show(active+1,true); }
    if (ev.key === 'ArrowLeft') { ev.preventDefault(); show(active-1,true); }
    if (ev.key === 'Home') { ev.preventDefault(); show(0,true); }
    if (ev.key === 'End') { ev.preventDefault(); show(slides.length-1,true); }
  });
  let touchStartX = null;
  carousel.addEventListener('touchstart', ev => {
    touchStartX = ev.changedTouches[0]?.screenX ?? null;
  }, {passive:true});
  carousel.addEventListener('touchend', ev => {
    if (touchStartX === null) return;
    const delta = (ev.changedTouches[0]?.screenX ?? touchStartX) - touchStartX;
    if (Math.abs(delta) > 45) show(active + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, {passive:true});
  show(0);
})();
