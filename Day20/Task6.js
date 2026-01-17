// Create a class Product with name and price, and a method discountedPrice().
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    const discount = (this.price * discountPercent) / 100;
    return this.price - discount;
  }
}
const p1 = new Product("Mobile", 20000);
console.log(p1.discountedPrice(10));
