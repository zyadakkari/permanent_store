function infoToggle() {
    var info = document.getElementsByClassName("product--info")
    var mobile = document.getElementsByClassName("mobile-layout")
    if (info[0].classList.contains("is-active")) {
        info[0].classList.remove("is-active")
        mobile[0].style.display = "block"
    } else {
        info[0].classList.add("is-active")
        mobile[0].style.display = "none"
    }
}