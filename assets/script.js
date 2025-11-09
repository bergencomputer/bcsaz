
// Defer simple animation via IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
  }
},{threshold: .15});
revealEls.forEach(el=>obs.observe(el));

// Mobile nav toggle
const navBtn = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if(navBtn && navMenu){
  navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  });
}

// Smooth scroll for anchors (native CSS scroll-behavior handles most cases)

// Lighthouse hints
try{
  if('loading' in HTMLImageElement.prototype){
    document.querySelectorAll('img[loading="lazy"]').forEach(img=>{
      if(!img.complete){ img.addEventListener('load',()=>img.classList.add('loaded'),{once:true}); }
    });
  }
}catch(_){}
