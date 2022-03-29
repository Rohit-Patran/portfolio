
const MENU = document.querySelector(".links");
const BUTTON = document.querySelector(".hamburger");
const LINKS = document.querySelectorAll(".links a");


BUTTON.addEventListener("click",()=>{
    MENU.classList.toggle("active");
});

LINKS.forEach((link)=>{
    link.addEventListener("click",()=>{
        MENU.classList.toggle("active");
    });
});

