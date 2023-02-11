function accordionToggle(n) {
    let accordions = Array.from(document.getElementsByClassName("accordion--content"));
    let buttons = Array.from(document.getElementsByClassName("accordion--icon"), button => button.querySelector('svg'));
    if (accordions[n].classList.contains("is-active")) {
        accordions[n].classList.remove("is-active")
        buttons[n].style.transform = "rotate(90deg)";
    } else if (!accordions[n].classList.contains("is-active")) {
        accordions[n].classList.add("is-active");
        buttons[n].style.transform = "rotate(180deg)";
    }
}

function mobileAccordionToggle(n) {
    let accordions = Array.from(document.getElementsByClassName("mobile--accordion--content"));
    console.log(accordions)
    let buttons = Array.from(document.getElementsByClassName("mobile--accordion--icon"), button => button.querySelector('svg'));
    if (accordions[n].classList.contains("is-active")) {
        accordions[n].classList.remove("is-active")
        buttons[n].style.transform = "rotate(90deg)";
    } else if (!accordions[n].classList.contains("is-active")) {
        accordions[n].classList.add("is-active");
        buttons[n].style.transform = "rotate(180deg)";
    }
}