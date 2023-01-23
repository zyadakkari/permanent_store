function sidebar_open() {
    var sidebar = document.getElementsByClassName("sidebar-container");
    sidebar[0].style.width = "100%";
    sidebar[0].style.display = "block";
  }

  function sidebar_close() {
    var sidebar = document.getElementsByClassName("sidebar-container");
    sidebar[0].style.display = "none";
    
  }