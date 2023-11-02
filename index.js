const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    const title = prompt('Enter the title of the book:');
    const author = prompt('Enter the fullname of the author:');
    const pages = Number(prompt('Enter the number of pages in the book:'));

    let read;
    const status = Number(prompt('Have you read the book yet?\n1. Not read yet\n2. Still reading\n3.Finished reading'));
    switch(status) {
        case 1:
            read = 'not read yet';
            break;
        case 2:
            read = 'still reading';
            break;
        case 3:
            read = 'finished reading';
            break;
        default:
            alert('You entered an incorrect option.');
            break;
    }
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function viewLibrary() {
    const body = document.body;
    const table = document.createElement('table');
    body.appendChild(table);
    const headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    const headers = [];
    for(let i = 0; i < 4; i++) {
        const cell = document.createElement('th');
        headers.push(cell);
        headerRow.appendChild(cell);
    }
    headers[0].textContent = 'Title';
    headers[1].textContent = 'Author';
    headers[2].textContent = 'Number of Pages';
    headers[3].textContent = 'Read Status';
    
    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const row = document.createElement('tr');
        table.appendChild(row);

        const cells = [];
        for(let i = 0; i < 4; i++) {
            const cell = document.createElement('td');
            cells.push(cell);
            row.appendChild(cell);
        }
        cells[0].textContent = book.title;
        cells[1].textContent = book.author;
        cells[2].textContent = book.pages;
        cells[3].textContent = book.read;
    }
}
// const book1 = new Book('Sapiens','Yuval Noah Harari',380,'finished reading');
// const book2 = new Book('Why We Sleep','Matt Walker',260,'finished reading');
// const book3 = new Book('Astrophysics for People in a Hurry','Neil Tyson',120,'still reading');
// const book4 = new Book('Rationality','Steven Pinker',330,'not yet read');