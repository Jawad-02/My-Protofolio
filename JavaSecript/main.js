let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if(!isBurgerOpen){
        burgerMenu.style.display = "block";
        burgerMenu.style.backgroundPosition = "center";
        isBurgerOpen = true;
    }else if(isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerMenu.style.backgroundPosition = "center left 50px";
        isBurgerOpen = false;
    }
}