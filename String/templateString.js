/**
 * it is use when we have to write values inside strings 
 * without concatenation operator
 * 
 * syntax =>  ${.......}
 */
let product = {
    name : "Iphone",
    brand : "Apple",
    price : 12000,
}
 
let str = `The name of the product is ${product.name} and its brand is ${product.brand} which price is ${product.price}`;
console.log(str);