(()=>{
  'use strict';
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(menu&&nav){
    menu.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  }
  const filters=document.querySelector('.filter-controls');
  if(filters){
    const cards=[...document.querySelectorAll('.work-card')];
    const count=filters.querySelector('.result-count');
    filters.querySelectorAll('[data-filter]').forEach(button=>{
      button.addEventListener('click',()=>{
        const filter=button.dataset.filter;
        let visible=0;
        filters.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===button));
        cards.forEach(card=>{const match=filter==='all'||card.dataset.type===filter||(filter==='Accepted'&&(card.dataset.status||'').includes('Accepted'));card.hidden=!match;if(match)visible++;});
        if(count)count.textContent=visible+' '+(visible===1?'entry':'entries');
      });
    });
  }
})();
