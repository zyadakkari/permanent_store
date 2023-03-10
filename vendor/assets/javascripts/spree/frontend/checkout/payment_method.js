function togglePay(n) {
    var paymentMethods = document.querySelectorAll('.payment-method-control-item');
    
    paymentMethods.forEach(function(method) {
      if (method.id === `payment_view_${n}`) {
        method.style.display = 'block';
      } else {
        method.style.display = 'none';
      }
    });
  }