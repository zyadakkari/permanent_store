function sidebar_open() {
    var sidebar = document.getElementsByClassName("sidebar-container");
    var main = document.getElementsByClassName("storefront-content");
    var menu = document.getElementsByClassName("menu-sandwich");
    var menuClose = document.getElementsByClassName("menu-close");
    main[0].style.display = "none";
    sidebar[0].style.width = "100%";
    sidebar[0].style.display = "block";
    menu[0].style.display = "none";
    menuClose[0].style.display = "block";
  }

  function sidebar_close() {
    var sidebar = document.getElementsByClassName("sidebar-container");
    var main = document.getElementsByClassName("storefront-content");
    var menu = document.getElementsByClassName("menu-sandwich");
    var menuClose = document.getElementsByClassName("menu-close");
    sidebar[0].style.display = "none";
    main[0].style.display = "block";
    menuClose[0].style.display = "none";
    menu[0].style.display = "block";
    
  }

  function bag_toggle() {
    var bag = document.getElementsByClassName("bag-container");
    var content = document.getElementsByClassName("storefront-content");
    if(bag[0].classList.contains("is-active")) {
      bag[0].classList.remove("is-active")
      if (window.matchMedia("(max-width: 940px)").matches) {
        content[0].style.display = "block";
      };
    } else {
      bag[0].classList.add("is-active")
      if (window.matchMedia("(max-width: 940px)").matches) {
        content[0].style.display = "none"
      };
    }
  }