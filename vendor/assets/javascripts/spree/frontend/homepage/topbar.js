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