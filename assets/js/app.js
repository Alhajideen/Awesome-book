const form = document.querySelector('.book-form');
const bookTittle = document.querySelector('.tittle');
const bookAuth = document.querySelector('.author');
let bookArr = [];
const tbody = document.querySelector('.tbody');
const tableData = document.querySelector('table-data');
const empty = document.querySelector('.empty-books');
let ourBooks = JSON.parse(localStorage.getItem('Books'));
window.addEventListener('load', () => {
  if (ourBooks) {
    bookArr = JSON.parse(localStorage.getItem('Books'));
    displaytoDom();
    empty.style.display = 'none';
  } else {
    empty.innerHTML = 'Book Library is empty';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {
    tittle: bookTittle.value,
    author: bookAuth.value,
  };
  bookArr.push(book);
  localStorage.setItem('Books', JSON.stringify(bookArr));
  displaytoDom();
});

const displaytoDom = () => {
  let tableRow = '';
  if (ourBooks) {
    for (let i = 0; i < ourBooks.length; i++) {
      tableRow += `<tr>
    <td>${ourBooks[i].tittle}</td>
    <td>${ourBooks[i].author}</td>
    <td><button id=${i} class="remove-btn">Remove</button></td>
  </tr>`;
    }
    tbody.innerHTML += tableRow;
  }
};

// Script for removing add items
let item = null;
tbody.addEventListener('click', (e) => {
  const index = e.target.id;
  item = bookArr[index];
  bookArr = bookArr.filter(removeItem);
  localStorage.setItem('Books', JSON.stringify(bookArr));
});

function removeItem(elem) {
  return elem.tittle != item.tittle;
}
