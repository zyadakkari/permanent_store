function infoToggle() {
    var info = document.getElementsByClassName("mobile--product--info")
    var gallery = document.getElementsByClassName("product--gallery")
    var close = document.getElementsByClassName("info--close")
    if (info[0].classList.contains("is-active")) {
        info[0].classList.remove("is-active")
        gallery[0].style.display = "block"
        close[0].style.display = "none"
    } else {
        info[0].classList.add("is-active")
        gallery[0].style.display = "none"
        close[0].style.display = "block"
    }
}