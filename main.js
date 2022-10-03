
let calcScrollValue = () => {
  let scrollProgress = document.getElementById
  ("progresS");

  let progressValue = document.getElementById
  ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHight = 
   document.documentElement.scrollHeight -
   document.documentElement.clientHeight;
 let scrollValue = Math.round((pos * 100) / calcHight);
 if(pos>100){
  scrollProgress.style.display = "grid";
 }
  else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
 
  scrollProgress.style.background = `conic-gradient(#0a70dd ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


let mainMenu = document.querySelector(".main-menu");
let toggle = document.querySelector(".toggle");


let openMenu = false;

toggle.addEventListener("click", function () {
  if(openMenu === false) {
    mainMenu.style.right = "0%";
    openMenu = true;
  } else if(openMenu === true) {
    mainMenu.style.right = "-50%";
    openMenu = false;
}
} );





