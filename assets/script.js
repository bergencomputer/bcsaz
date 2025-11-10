
const r=document.querySelectorAll(".reveal");
const o=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting&&(t.target.classList.add("in"),o.unobserve(t.target))},{threshold:.15});
r.forEach(e=>o.observe(e));
