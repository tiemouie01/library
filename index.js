const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }

  toggleReadStatus() {
    if (this.read === "not read yet") {
      this.read = "finished reading";
    } else {
      this.read = "not read yet";
    }
  }
}

function addBookToLibrary() {
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the fullname of the author:");
  const pages = Number(prompt("Enter the number of pages in the book:"));

  let read;
  const status = Number(
    prompt(
      "Have you read the book yet?\n1. Not read yet\n2. Still reading\n3.Finished reading"
    )
  );
  switch (status) {
    case 1:
      read = "not read yet";
      break;
    case 2:
      read = "still reading";
      break;
    case 3:
      read = "finished reading";
      break;
    default:
      alert("You entered an incorrect option.");
      break;
  }
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function addStatusChangeButton(row, title) {
  const cell = document.createElement("td");
  row.appendChild(cell);
  const statusButton = document.createElement("button");
  statusButton.classList.add("status-button");
  statusButton.textContent = "Change Read Status";
  cell.appendChild(statusButton);

  statusButton.addEventListener("click", () => {
    const book = myLibrary.find((book) => book.title === title);
    book.toggleReadStatus();
  });
}

function addRemoveButton(row, title) {
  const cell = document.createElement("td");
  row.appendChild(cell);
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove from Library";
  cell.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    const index = myLibrary.findIndex((book) => book.title === title);
    myLibrary.splice(index, 1);
  });
}

function createRows(table, title, author, pages, read) {
  const row = document.createElement("tr");
  table.appendChild(row);

  const cells = [];
  for (let i = 0; i < 4; i++) {
    let cell;
    if (title === "Title") {
      cell = document.createElement("th");
    } else {
      cell = document.createElement("td");
    }
    cells.push(cell);
    row.appendChild(cell);
  }
  cells[0].textContent = title;
  cells[1].textContent = author;
  cells[2].textContent = pages;
  cells[3].textContent = read;

  if (title !== "Title") {
    addRemoveButton(row, title);
    addStatusChangeButton(row, title);
  }
}

function viewLibrary() {
  const body = document.body;
  const table = document.createElement("table");
  body.appendChild(table);
  createRows(table, "Title", "Author", "Pages", "Read");

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    createRows(table, book.title, book.author, book.pages, book.read);
  }
}

function exitLibrary() {
  const body = document.body;
  const table = document.querySelector("table");
  body.removeChild(table);
}

function addBook(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = Number(document.getElementById("pages").value);

  const readButtons = document.querySelectorAll('input[name="read"]');
  let read;
  for (const readButton of readButtons) {
    if (readButton.checked) {
      read = readButton.value;
      break;
    }
  }

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const openForm = document.querySelector("[data-open-modal]");
const closeForm = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openForm.addEventListener("click", () => {
  modal.showModal();
});

closeForm.addEventListener("click", () => {
  modal.close();
});

const bookForm = document.querySelector("form");
bookForm.addEventListener("submit", addBook);

const book1 = new Book("Sapiens", "Yuval Noah Harari", 380, "finished reading");
const book2 = new Book("Why We Sleep", "Matt Walker", 260, "finished reading");
const book3 = new Book(
  "Astrophysics for People in a Hurry",
  "Neil Tyson",
  120,
  "not read yet"
);
const book4 = new Book("Rationality", "Steven Pinker", 330, "not yet read");
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

const openLibrary = document.querySelector(".open-library");
openLibrary.addEventListener("click", () => {
  const table = document.querySelector("table");
  if (!table) {
    viewLibrary();
  }
});

const closeLibrary = document.querySelector(".close-library");
closeLibrary.addEventListener("click", () => {
  exitLibrary();
});
