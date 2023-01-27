function accordionToggle(n) {
    let accordions = Array.from(document.getElementsByClassName("accordion--content"));
    let buttons = Array.from(document.getElementsByClassName("accordion--icon"));
    for(let i = 0; i < accordions.length; i++) {
        if((i == n) && (accordions[i].classList.contains("is-active"))) {
            accordions[i].classList.remove("is-active")
            buttons[i].innerHTML = "+";
        } else if ((i == n) && (!accordions[i].classList.contains("is-active"))) {
            accordions[i].classList.add("is-active")
            buttons[i].innerHTML = "-";
        }
    }
}