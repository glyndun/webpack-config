const products = {
    shoes: 2,
    cups: 5,
    shirts: 3
};

const cart = {
    ...products, total_price: '$90.99'
};

console.log(products)
console.log(cart)
