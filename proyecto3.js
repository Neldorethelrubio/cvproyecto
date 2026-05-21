// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// MENÚ
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// FORMULARIO
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if(!nombre || !email || !mensaje){
    error.textContent = "Completa todos los campos";
    error.style.color = "red";
  } else {
    error.textContent = "Mensaje enviado";
    error.style.color = "lime";
    form.reset();
  }
});

// MODAL IMÁGENES
document.querySelectorAll(".img-click").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position:fixed;
      top:0;left:0;
      width:100%;height:100%;
      background:rgba(0,0,0,0.9);
      display:flex;
      justify-content:center;
      align-items:center;
    `;

    modal.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;">`;

    modal.addEventListener("click", () => modal.remove());

    document.body.appendChild(modal);
  });
});

// RELOJ
function reloj(){
  const r = document.getElementById("reloj");
  const d = new Date();
  r.textContent = d.toLocaleTimeString();
}
setInterval(reloj,1000);

// TYPING
const text = "Creo experiencias web modernas";
let i=0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").textContent += text[i];
    i++;
    setTimeout(typing,60);
  }
}
typing();

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

sections.forEach(s=>observer.observe(s));

// BOTÓN ARRIBA
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
  if(window.scrollY>300){
    topBtn.style.display="block";
  }else{
    topBtn.style.display="none";
  }
});

topBtn.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});

// MODO CLARO
document.getElementById("themeToggle").addEventListener("click",()=>{
  document.body.classList.toggle("light");
});
