document.querySelector(".header__burger").onclick = function() {
    if(document.querySelector(".header__drawer").classList.contains("header__drawer--open")) {
        document.querySelector(".header__drawer").classList.remove("header__drawer--open");
        document.querySelector(".header__burger-img").src = "assets/img/menu.svg";
    } else {
        document.querySelector(".header__drawer").classList.add("header__drawer--open");
        document.querySelector(".header__burger-img").src = "assets/img/x.svg";
    }
};