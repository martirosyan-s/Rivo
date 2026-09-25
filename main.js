const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
let isOpen = true;
function openMenu() {
    if (isOpen) {
         burger.querySelector("img").src = "./img/x.svg";
         document.body.style.overflow = "hidden";
         isOpen = false
    }else { burger.querySelector("img").src = "./img/menu.svg"; 
        isOpen = true
    }
   
    nav.classList.toggle("nav_active");
}
window.addEventListener("resize", function () {
  if (this.window.matchMedia("(min-width:992px)").matches) {
    console.log("barev");
    nav.classList.remove("nav_active");
    burger.querySelector("img").src = "./img/menu.svg";
    document.body.style.overflow = "visible";
    isOpen = true
  }
});