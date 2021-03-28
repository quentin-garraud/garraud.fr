var hamburger = document.querySelector(".burger");
var menu = document.querySelector("#menu");

function openNav() {
    hamburger.classList.add("active");
    menu.classList.add("active");
}
function closeNav() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}
hamburger.addEventListener('click', () => hamburger.classList.contains('active') ? closeNav() : openNav());
