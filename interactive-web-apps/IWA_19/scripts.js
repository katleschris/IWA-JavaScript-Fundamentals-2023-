import { BOOKS_PER_PAGE, authors, genres, books } from './data.js';

const bookList = document.querySelector('[data-list-items]');
const searchInput = document.querySelector('.search-input');
const authorSelect = document.querySelector('.author-select');
const genreSelect = document.querySelector('.genre-select');
const modeButton = document.querySelector('.mode-button');

let currentPage = 1;
let currentBooks = [];


//make a function for a list of the books
function renderBookList() {
  const screenWidth = window.innerWidth;
  let numBooksPerRow;

  // Determine the number of books per row based on the screen width
  if (screenWidth < 600) {
    numBooksPerRow = 1;
  } else if (screenWidth < 960) {
    numBooksPerRow = 2;
  } else if (screenWidth < 1300) {
    numBooksPerRow = 3;
  } else {
    numBooksPerRow = 4;
  }

  // Calculate the width of the book divs based on the number of books per row
  const bookWidth = (screenWidth / numBooksPerRow) - 20; // Subtract 20px for the total margin between the divs
  bookList.replaceChildren();
  for (let i = 0; i < BOOKS_PER_PAGE * currentPage; i++) {
    const picture = books[i].image;
    const title = books[i].title;
    const authorCode = books[i].author;
    const author = authors[authorCode];

    const bookItem = document.createElement("div");
    bookItem.style.width = `${bookWidth}px`;
    bookItem.style.height = "auto";
    bookItem.style.padding = "10px";
    bookItem.style.boxSizing = "border-box";
    bookItem.style.display = "grid";
    bookItem.style.gridTemplateColumns = "1fr 1fr";
    bookItem.style.gridGap = "20px";

    const imageDiv = document.createElement("div");
    const titleAuthorDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = picture;
    img.style.width = "100%";
    img.style.height = "auto";

    imageDiv.appendChild(img);

    titleDiv.textContent = title;
    titleDiv.style.fontSize = "1.5rem";
    titleDiv.style.marginBottom = "0.5rem";
    titleDiv.style.marginTop = "0.5rem";

    authorDiv.textContent = author;
    authorDiv.style.fontSize = "1rem";
    authorDiv.style.marginTop = "0.5rem";

    titleAuthorDiv.appendChild(titleDiv);
    titleAuthorDiv.appendChild(authorDiv);
    titleAuthorDiv.style.display = "flex";
    titleAuthorDiv.style.flexDirection = "column";

    bookItem.appendChild(imageDiv);
    bookItem.appendChild(titleAuthorDiv);

    bookList.appendChild(bookItem);
  }
}
renderBookList()

// add functionality to button
const blueButton = document.querySelector('[data-list-button]');
blueButton.textContent = 'Show more'
blueButton.addEventListener('click', () => {
  currentPage += 1;
  renderBookList();
})
// function createBookPreview(book) {
//   const bookPreview = document.createElement('div');
//   bookPreview.classList.add('book-preview');

//   const bookImage = document.createElement('img');
//   bookImage.src = book.image;
//   bookImage.alt = `${book.title} cover`;
//   bookPreview.appendChild(bookImage);

//   const bookInfo = document.createElement('div');
//   bookInfo.classList.add('book-info');
//   bookPreview.appendChild(bookInfo);

//   const bookTitle = document.createElement('h2');
//   bookTitle.textContent = book.title;
//   bookInfo.appendChild(bookTitle);

//   const bookAuthor = document.createElement('p');
//   bookAuthor.textContent = `By ${book.author}`;
//   bookInfo.appendChild(bookAuthor);

//   const bookSummary = document.createElement('p');
//   bookSummary.textContent = book.summary;
//   bookInfo.appendChild(bookSummary);

//   const bookPublished = document.createElement('p');
//   bookPublished.textContent = `Published: ${book.published}`;
//   bookInfo.appendChild(bookPublished);

//   return bookPreview;
// }

// function renderBookPreviews(bookArray) {
//   bookList.innerHTML = '';

//   bookArray.forEach((book) => {
//     const bookPreview = createBookPreview(book);
//     bookList.appendChild(bookPreview);
//   });
// }

// function getFilteredBooks() {
//   let filteredBooks = books.filter((book) => {
//     const authorFilter = authorSelect.value === 'all' || book.author === authorSelect.value;
//     const genreFilter = genreSelect.value === 'all' || book.genre === genreSelect.value;
//     const searchFilter = searchInput.value === '' || book.title.toLowerCase().includes(searchInput.value.toLowerCase());
//     return authorFilter && genreFilter && searchFilter;
//   });
//   return filteredBooks;
// }

// function paginateBooks(bookArray, page) {
//   const startIndex = (page - 1) * BOOKS_PER_PAGE;
//   const endIndex = startIndex + BOOKS_PER_PAGE;
//   return bookArray.slice(startIndex, endIndex);
// }

// function renderPagination(bookArray) {
//   const totalPages = Math.ceil(bookArray.length / BOOKS_PER_PAGE);
//   const pagination = document.querySelector('.pagination');
//   pagination.innerHTML = '';

//   for (let i = 1; i <= totalPages; i++) {
//     const pageLink = document.createElement('a');
//     pageLink.href = '#';
//     pageLink.textContent = i;
//     pageLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       currentPage = i;
//       currentBooks = paginateBooks(bookArray, currentPage);
//       renderBookPreviews(currentBooks);
//       renderPagination(bookArray);
//     });
//     const pageItem = document.createElement('li');
//     pageItem.appendChild(pageLink);
//     if (i === currentPage) {
//       pageItem.classList.add('active');
//     }
//     pagination.appendChild(pageItem);
//   }
// }

// function toggleMode() {
//   document.body.classList.toggle('dark-mode');
// }

// Event listeners

// searchInput.addEventListener('input', () => {
//   currentBooks = getFilteredBooks();
//   currentPage = 1;
//   renderBookPreviews(paginateBooks(currentBooks, currentPage));
//   renderPagination(currentBooks);
// });

// authorSelect.addEventListener('change', () => {
//   currentBooks = null
// })

