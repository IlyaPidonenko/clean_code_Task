const products = [
  { id: 1, title: "Laptop", price: 999 },
  { id: 2, title: "Smartphone", price: 599 },
  { id: 3, title: "Headphones", price: 199 },
];

function getProductById(id) {
  for (let product of products) {
    if (product.id == id) return product;
  }
  return null;
}

function addProduct(name, cost) {
  let maxId = 0;
  for (let product of products) {
    if (product.id > maxId) maxId = product.id;
  }
  const newProduct = {id: maxId + 1, title: name, price: cost};
  const newProducts = [...products, newProduct];
  return newProducts;
}

function logProducts() {
  for (let product of products) {
    console.log(product.title + " costs " + product.price + "€");
  }
}

// Use functions
let myProduct = getProductById(2);
console.log(myProduct);
addProduct("Tablet", 399);
logProducts();
