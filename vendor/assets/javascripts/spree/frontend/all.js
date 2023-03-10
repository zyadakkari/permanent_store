// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require rails-ujs
//= require_tree .

window.addEventListener('load', function () {
    var loader = document.querySelector(".loader");
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  });
  

  function removeButtonAlert() {
    alert("Please edit the quantity to zero to remove the item");
  }
  //= require spree/frontend/solidus_pay_mob
//= require spree/frontend/solidus_razorpay
