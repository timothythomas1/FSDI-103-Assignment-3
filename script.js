function priceCalc(prodName, price, qty) {
    const salesTax = 0.04;
    document.write(`
        <p>The price of each ${prodName} is $${price} </p>\
        <p>You have purchased x${qty} ${prodName}'s</p>\
        <p>Your total sales tax amount is
            <span class="currency">${(qty*price)*(salesTax)}
            </span></p>\
        <p>Your total purchase amount is <span class="currency">${(qty*price)*(1+salesTax)}</span></p>\
    `)
}

let prodName = prompt("Enter product name: ");
let price = Number(prompt("Enter price in dollars: "));
let qty = Number(prompt("Enter quantity: "));

priceCalc(prodName, price, qty)