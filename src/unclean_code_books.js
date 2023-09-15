// Poorly written JavaScript file for handling book transactions

const books = [
  { id: 1, titel: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, titel: "Moby Dick", price: 12.3 },
  { id: 3, titel: "1984", price: 8.5 },
];

function getBookById(id) {
  for (let book of books) {

    if (book.id == id) {
      return book;
    }
  }
  return null;
}

function addBook(name, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) maxId = book.id;
  }
  const newBook = { id: maxId + 1, title: name, price: price };
  return [...books, newBook];
}


function logBooks() {
  for (let book of books) {
    console.log(book.titel + " - " + book.price + "€");
  }
}

// Example Function Calls
let myBook = getBookById(2);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
logBooks();
