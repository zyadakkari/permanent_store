let key;
let amount;
let paymobOrderId;
let orderId;
let receipt;
let color;
let storeName;
let firstName;
let lastName;
let country;
let streetAddress;
let buildingAddress;
let zipCode;
let email;
let contactNumber;
let options;
let pmbButton;
let orderToken;
let currency;
let frontend;
let successCallbackPath;

const paymentFailed = (response) => {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
};

const setPaymentMethod = () => {
  if (frontend === 'true') {
    paymentMethodId = document.querySelector('[name="order[payments_attributes][][payment_method_id]"]:checked').value
  } else {
    paymentMethodId = document.querySelector('[name="payment[payment_method_id]"]:checked').value
  }
}

const intializeCheckout = (options) => {
  setPaymentMethod();
  const body = JSON.stringify({
    receipt: receipt,
    amount: amount,
    orderId: orderId,
    paymentMethodId: paymentMethodId,
    options: options
  });

  return fetch('/api/initialize_checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Spree-Order-Token": orderToken
    },
    body
  })
}

const paymentSuccess = async (data) => {
  let floatAmount = (Number.parseFloat(amount) * 0.01).toPrecision(4)

  const body = JSON.stringify({
    order_token: orderToken,
    payment: {
      amount: floatAmount,
      payment_method_id: paymentMethodId,
      source_attributes: {
        razorpay_order_id: razorpayOrderId,
        razorpay_payment_id: data.razorpay_payment_id
      }
    },
  });

  return resp = await fetch('/api/checkouts/' + receipt + '/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Spree-Order-Token": orderToken
    },
    body,
  });
}

const advanceOrder = async () => {
  return fetch('/api/checkouts/' + receipt + '/advance', {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      "X-Spree-Order-Token": orderToken
    },
    data: {
      order_token: orderToken
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  pmbButton = document.getElementById('pmb-button1');
  if(pmbButton) {
    amountCents = pmbButton.dataset.amountCents;
    receipt = pmbButton.dataset.orderNumber;
    currency = pmbButton.dataset.currency;
    storeName = pmbButton.dataset.storeName;
    firstName = pmbButton.dataset.firstName;
    lastName = pmbButton.dataset.lastName;
    email = pmbButton.dataset.email;
    streetAddress = pmbButton.dataset.streetAddress;
    buildingAddress = pmbButton.dataset.buildingAddress;
    city = pmbButton.dataset.cityAddress;
    zipCode = pmbButton.dataset.zipCode;
    country = pmbButton.dataset.countryCode;
    contactNumber = pmbButton.dataset.contactNumber;
    orderToken = rzpButton.dataset.orderToken;
    orderId = rzpButton.dataset.orderId;
    frontend = rzpButton.dataset.frontend;
    successCallbackPath = rzpButton.dataset.successCallbackPath;

    options = {
      "key": '',
      "amount": amountCents,
      "currency": currency,
      "store_name": storeName,
      "order_id": orderId,
      "first_name": firstName,
      "last_name": lastName,
      "street": streetAddress,
      "building": buildingAddress,
      "country": countryCode,
      "city": city,
      "phone_number": contactNumber,
      "zip_code": zipCode,
      "email": email,
      
      // "handler": async function (response) {
      //     // Call Payment API to create payment source for order and update status
      //     await paymentSuccess(response);
      //     await advanceOrder();
      //     if (frontend) {
      //       window.location.href = successCallbackPath;
      //     }
      // }
    };

    pmbButton.onclick = async function(e) {
      e.preventDefault()
      // CAll API to create Razorpay Order
      intializeCheckout(options)
      .then((resp) => resp.json())
      .then((response) => {
        options.order_id = razorpayOrderId = response.razorpayOrderId;
        options.key = response.razorpayKey;
      })
      .then(() => {
        let rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', (response) => paymentFailed(response));
        rzp1.open()
      });
    }
  }
});