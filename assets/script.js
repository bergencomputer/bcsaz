
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } }
},{threshold:.15});
revealEls.forEach(el=>obs.observe(el));
