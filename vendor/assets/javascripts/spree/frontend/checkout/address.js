document.addEventListener("DOMContentLoaded", function(event) { 
    var billingAddressInputs = document.getElementById("billing_address_inputs");
    var useBillingCheckbox = document.getElementById("order_use_billing");
    var shippingAddressInputs = document.querySelector("#shipping form");
  
    function copyShippingAddressToBilling() {
      var shippingInputs = shippingAddressInputs.querySelectorAll("input");
      var billingInputs = billingAddressInputs.querySelectorAll("input");
  
      for (var i = 0; i < shippingInputs.length; i++) {
        var shippingInput = shippingInputs[i];
        var billingInput = billingInputs[i];
  
        if (billingInput && !billingInput.readOnly) {
          billingInput.value = shippingInput.value;
        }
      }
    }
  
    function hideBillingAddressInputs() {
      billingAddressInputs.style.display = "none";
    }
  
    useBillingCheckbox.addEventListener("change", function() {
      if (useBillingCheckbox.checked) {
        hideBillingAddressInputs();
        copyShippingAddressToBilling();
      } else {
        billingAddressInputs.style.display = "";
      }
    });
  
    if (useBillingCheckbox.checked) {
      hideBillingAddressInputs();
      copyShippingAddressToBilling();
    }
  });
