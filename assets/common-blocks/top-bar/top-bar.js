document.querySelector(".top-bar__menu-icon").onclick = function() {
    if(document.querySelector(".top-bar__inner-menu-drawer").classList.contains("top-bar__inner-menu-drawer_open")) {
        document.querySelector(".top-bar__inner-menu-drawer").classList.remove("top-bar__inner-menu-drawer_open");
        document.querySelector(".top-bar__menu-icon-img").src = "/assets/img/menu.svg";
    } else {
        document.querySelector(".top-bar__inner-menu-drawer").classList.add("top-bar__inner-menu-drawer_open");
        document.querySelector(".top-bar__menu-icon-img").src = "/assets/img/x.svg";
    }
};