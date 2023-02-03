function togglePay(n) {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var paymentMethod = Array.from(document.getElementsByClassName("payment-method-control-item"));
    console.log(radioButtons)
    console.log(paymentMethod)
    console.log(n)
    if (n == 2) {
        paymentMethod[0].style.display = "block";
        paymentMethod[1].style.display = "none";
    } else if (n == 3) {
        paymentMethod[0].style.display = "none";
        paymentMethod[1].style.display = "block";
    }
};