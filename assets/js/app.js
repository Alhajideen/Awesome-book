const form = document.querySelector('.book-form');
const bookTittle = document.querySelector('.tittle');
const bookAuth = document.querySelector('.boot-author');
const bookArr = [];

form.addEventListener('submit', () => {
  const book = {
    tittl: bookTittle.value,
    author: bookAuth.value,
  };
  bookArr.push(book);
});

const displaytoDom = () => {};
