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

addBookToLibrary();