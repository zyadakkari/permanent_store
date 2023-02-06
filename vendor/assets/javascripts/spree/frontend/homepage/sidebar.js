function toggleMenu(n) {
    let menus = Array.from(document.getElementsByClassName("sidebar--mobile-submenu"));
    // let buttons = Array.from(document.getElementsByClassName("sidebar--mobile-title"));
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

function toggleDesktop(n) {
    let menus = Array.from(document.getElementsByClassName("sidebar--items"));
    let parents = Array.from(document.getElementsByClassName("sidebar--title"));
    for(let i = 0; i < menus.length; i++) {
        // if((i == n) && (!menus[i].classList.contains("is-active"))) {
        //     menus[i].classList.add("is-active");
        // } else {
        //     if(menus[i].classList.contains("is-active")) {
        //         menus[i].classList.remove("is-active");
        //     }
        // }
        if (i == n && menus[i].style.height == "0px") {
            menus[i].style.height = "auto"
            menus[i].style.opacity = "1"
            parents[i].style.color = "black";
        } else {
            if (menus[i].style.height == "auto") {
                menus[i].style.height = "0px"
                menus[i].style.opacity = "0"
                parents[i].style.color = "var(--dimmed)";
            }
        }
    }
}