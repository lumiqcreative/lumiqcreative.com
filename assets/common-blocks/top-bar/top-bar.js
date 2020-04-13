document.querySelector(".top-bar__menu-button").onclick = function() {
    if(document.querySelector(".top-bar__inner-menu-drawer").classList.contains("top-bar__inner-menu-drawer_open")) {
        document.querySelector(".top-bar__inner-menu-drawer").classList.remove("top-bar__inner-menu-drawer_open");
        document.querySelector(".top-bar__menu-icon").classList.remove("top-bar__menu-icon_clicked");
    } else {
        document.querySelector(".top-bar__inner-menu-drawer").classList.add("top-bar__inner-menu-drawer_open");
        document.querySelector(".top-bar__menu-icon").classList.add("top-bar__menu-icon_clicked");
    }
};