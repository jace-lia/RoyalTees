document.getElementById('decreaseQty')?.addEventListener('click', function() {
  const qtyInput = document.getElementById('productQuantity');
  let val = parseInt(qtyInput.value);
  if (val > 1) qtyInput.value = val - 1;
});

document.getElementById('increaseQty')?.addEventListener('click', function() {
  const qtyInput = document.getElementById('productQuantity');
  let val = parseInt(qtyInput.value);
  qtyInput.value = val + 1;
});

document.getElementById('orderForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const quantity = document.getElementById('productQuantity').value;
  const selectedSizeNode = document.querySelector('input[name="productSize"]:checked');
  const size = selectedSizeNode ? selectedSizeNode.value : 'S';

  const recipient = 'orders@examplewebsite142.com';
  const subject = encodeURIComponent(`New Order: ${productName} (${size})`);
  const body = encodeURIComponent(
    `Hello RoyalTees Orders,\n\nI would like to place an order for:\n\n` +
    `- Product: ${productName}\n- Price: ${productPrice}\n- Size: ${size}\n- Quantity: ${quantity}\n\n` +
    `Please process my order. Thank you!`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
