function toggleMenu(n) {
    let menus = Array.from(document.getElementsByClassName("sidebar--mobile-submenu"));
    for(let i = 0; i < menus.length; i++) {
        if((i == n) && (!menus[i].classList.contains("is-active"))) {
            menus[i].classList.add("is-active");
        } else {
            if(menus[i].classList.contains("is-active")) {
                menus[i].classList.remove("is-active");
            }
        }
    }
}