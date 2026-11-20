const colorImages = {
  'Black/White':   'assets/shirt1mainimageblackwhite.png',
  'Cherry/Caramel Tan':   'assets/shirt1mainimagecherrytan.png',
  'Dark Navy/Yellow': 'assets/shirt1mainimagedarknavyyellow.png',
  'Eggplant/Dusty Rose':  'assets/shirt1mainimageeggplantdustyrose.png',
  'Slate Blue/Gray':  'assets/shirt1mainimageslatebluegray.png',
  'White/Black':  'assets/shirt1mainimagewhiteblack.png'
};

const colorSelect = document.getElementById('TeeColor');
const mainImage = document.getElementById('main-image');

colorSelect?.addEventListener('change', function () {
  const color = colorSelect.value;
  const newSrc = colorImages[color];
  if (!newSrc) return;

  mainImage.src = newSrc;
  mainImage.alt = `Everyday Comfort Tee in the color, ${color}`;
});

document.getElementById('DecreaseQty')?.addEventListener('click', function () {
  const qtyInput = document.getElementById('TeeQuantity');
  let val = parseInt(qtyInput.value, 10);
  if (val > 1) qtyInput.value = val - 1;
});

document.getElementById('IncreaseQty')?.addEventListener('click', function () {
  const qtyInput = document.getElementById('TeeQuantity');
  let val = parseInt(qtyInput.value, 10);
  qtyInput.value = val + 1;
});

document.getElementById('OrderOptions')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const teeName = document.getElementById('TeeName').value;
  const teePrice = document.getElementById('TeePrice').value;
  const quantity = document.getElementById('TeeQuantity').value;
  const color = document.getElementById('TeeColor').value;
  const selectedSizeNode = document.querySelector('input[name="productSize"]:checked');
  const size = selectedSizeNode ? selectedSizeNode.value : 'M';

  const recipient = 'orders@examplewebsite142.com';
  const subject = encodeURIComponent(`New Order: ${teeName} (${color}, ${size})`);
  const body = encodeURIComponent(
    `Hello RoyalTees Orders,\n\nI would like to place an order for:\n\n` +
    `- Product: ${teeName}\n- Price: ${teePrice}\n- Color: ${color}\n- Size: ${size}\n- Quantity: ${quantity}\n\n` +
    `Please process my order. Thank you!`
  );
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
window.open(gmailUrl, '_blank');
});
