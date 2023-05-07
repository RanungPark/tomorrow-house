const productInquiryIconButton = document.querySelector('.product-inquiry .product-section-header.is-active .icon-button');
const productShipmentIconButton = document.querySelector('.product-shipment .product-section-header.sm-only .icon-button');

function showFullproductInquiry() {
  const productInquiry = this.parentNode.parentNode;
  productInquiry.classList.add('is-open');
}

function showFullproductShipment() {
  const productShipment = this.parentNode.parentNode;
  productShipment.classList.add('is-open');
}

productInquiryIconButton.addEventListener('click', showFullproductInquiry);
productShipmentIconButton.addEventListener('click', showFullproductShipment);