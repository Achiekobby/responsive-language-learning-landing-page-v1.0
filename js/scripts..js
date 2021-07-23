const MenuBtn = document.getElementById("menu-toggle");
const CloseBtn = document.getElementById("close-menu");
const NavMenu = document.getElementById("nav-menu");


MenuBtn.addEventListener('click', ()=>{
    NavMenu.classList.toggle("show");
});

CloseBtn.addEventListener("click",()=>{
    NavMenu.classList.remove("show");
})