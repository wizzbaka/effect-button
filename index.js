/*
const btn = document.getElementById("btnEl");

const errorEl = document.querySelector(".wrong");

btn.addEventListener("click",()=>{
  errorEl.classList.remove("active");
});


const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
  const x = (event.pageX - btnEl.offsetLeft);
  const y = (event.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
*/

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
  const x = (event.pageX - btnEl.offsetLeft);
  const y = (event.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});