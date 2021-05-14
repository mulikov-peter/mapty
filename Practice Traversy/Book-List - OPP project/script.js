'use strict';

//*=== Get forms values:
const title = document.querySelector('#title'),
  author = document.querySelector('#author'),
  isbn = document.querySelector('#isbn');

//* Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//*=== UI Class
class UI {
  // Add book to list
  addBookToList(book) {
    const list = document.querySelector('#book-list');

    // Insert cols
    const row = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='delete'>X<a></td>
      `;
    list.insertAdjacentHTML('afterbegin', row);
  }

  // Show alert
  showAlert(message, className) {
    // Create div alert
    const divMessage = `
      <div class='alert ${className}'>${message}</div>
    `;
    document
      .querySelector('#book-form')
      .insertAdjacentHTML('afterbegin', divMessage);

    // TimeOut after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // Delete book
  deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }

  // Clear fields
  clearFields() {
    title.value = author.value = isbn.value = '';
  }
}

//* Lockal Storage Class
class Store {
  // Get books
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) books = [];
    else books = JSON.parse(localStorage.getItem('books'));

    return books;
  }

  // Display books
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(book => {
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  // Add book
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  // Remove book
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) books.splice(index, 1);
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//*=== Event Listener For Add Book:
document.querySelector('#book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Instantiate book:
  const book = new Book(title.value, author.value, isbn.value);

  // Instantiate UI:
  const ui = new UI();

  // Validate
  if (
    title.value.trim() === '' ||
    author.value.trim() === '' ||
    isbn.value.trim() === ''
  ) {
    // Show Error alert
    ui.showAlert('Please fill all fields', 'error');
    // Clear fields
    ui.clearFields();
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to lockal storage
    Store.addBook(book);

    // Show Success alert
    ui.showAlert('Book Added', 'success');
    // Clear fields
    ui.clearFields();
  }
});

//*=== Event Listener For Delete Book:
document.querySelector('#book-list').addEventListener('click', function (e) {
  e.preventDefault();

  // Instantiate UI:
  const ui = new UI();

  //Delete book
  ui.deleteBook(e.target);

  // Remove from Lockal Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Success alert
  ui.showAlert('Book Deleted', 'success');
});
