let amountInput = document.getElementById("amount");
amountInput.addEventListener('input', calculateDiscount);

let discountInput = document.getElementById("discount");
discountInput.addEventListener('input', calculateDiscount);

let discountedAmountInput = document.getElementById("discountedAmount");

function calculateDiscount() {

    let amount = parseFloat(amountInput.value);
    let discount = parseFloat(discountInput.value);

    if (!isNaN(amount) && !isNaN(discount)) {
        discountedAmountInput.value = amount - (amount * (discount / 100));
    }
}