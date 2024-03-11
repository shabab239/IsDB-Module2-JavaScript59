let unitPriceInput = document.getElementById("unitPrice");
unitPriceInput.addEventListener('input', calculateDiscount);

let quantityInput = document.getElementById("quantity");
quantityInput.addEventListener('input', calculateDiscount);

let totalPriceInput = document.getElementById("totalPrice");
totalPriceInput.addEventListener('input', calculateDiscount);

let discountInput = document.getElementById("discount");
discountInput.addEventListener('input', calculateDiscount);

let actualPriceInput = document.getElementById("actualPrice");

function calculateDiscount() {

    let unitPrice = parseFloat(unitPriceInput.value);
    let quantity = parseFloat(quantityInput.value);
    let totalPrice = parseFloat(totalPriceInput.value);
    let discount = parseFloat(discountInput.value);

    if (!isNaN(unitPrice) && !isNaN(quantity)) {
        totalPriceInput.value = unitPrice * quantity;
    }
    if(!isNaN(totalPrice) && !isNaN(discount)){
        actualPriceInput.value = totalPrice - (totalPrice * (discount / 100));
    }
}