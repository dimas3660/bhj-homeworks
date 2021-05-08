"use strict"
const menu = document.querySelectorAll("ul.menu_main > li> a");
let arrayMenu = Array.from(menuList);

for (let i = 0; i < arrayMenu.length; i++) {
    if (arrayMenu[i].nextElementSibling) {
        arrayMenu[i].onclick = function () {
            arrayMenu[i].nextElementSibling.classList.toggle("menu_active");
            return false;
        }
    }
}
