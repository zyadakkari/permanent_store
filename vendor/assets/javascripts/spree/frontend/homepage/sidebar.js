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
    // for(let i = 0; i < buttons.length; i++) {
    //     if((i == n) && (!buttons[i].classList.contains("expanded"))) {
    //         buttons[i].classList.add("expanded");
    //     } else {
    //         if(buttons[i].classList.contains("expanded")) {
    //             buttons[i].classList.remove("expanded");
    //         }
    //     }
    // }
}

function toggleDesktop(n) {
    let menus = Array.from(document.getElementsByClassName("sidebar--items"));
    // let buttons = Array.from(document.getElementsByClassName("sidebar--title"));
    for(let i = 0; i < menus.length; i++) {
        if((i == n) && (!menus[i].classList.contains("is-active"))) {
            menus[i].classList.add("is-active");
        } else {
            if(menus[i].classList.contains("is-active")) {
                menus[i].classList.remove("is-active");
            }
        }
    }
    // for(let i = 0; i < buttons.length; i++) {
    //     if((i == n) && (!buttons[i].classList.contains("expanded"))) {
    //         buttons[i].classList.add("expanded");
    //     } else {
    //         if(buttons[i].classList.contains("expanded")) {
    //             buttons[i].classList.remove("expanded");
    //         }
    //     }
    // }
}