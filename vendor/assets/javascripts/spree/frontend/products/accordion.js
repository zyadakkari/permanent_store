function accordionToggle(n) {
    let accordions = Array.from(document.getElementsByClassName("accordion--content"));
    let buttons = Array.from(document.getElementsByClassName("accordion--icon"));
    if (accordions[n].classList.contains("is-active")) {
        accordions[n].classList.remove("is-active")
        buttons[n].querySelector(".collapse-icon").classList.remove("is-active");
        buttons[n].querySelector(".expand-icon").classList.add("is-active");
    } else if (!accordions[n].classList.contains("is-active")) {
        accordions[n].classList.add("is-active");
        buttons[n].querySelector(".collapse-icon").classList.add("is-active");
        buttons[n].querySelector(".expand-icon").classList.remove("is-active");
    }
}