class Book {
    constructor(ISBN, title, author, numPages) {
        this._ISBN = ISBN;
        this._title = title;
        this._author = author;
        this._numPages = numPages;
    }

    get ISBN() {
        return this._ISBN;
    }

    set ISBN(newISBN) {
        this._ISBN = newISBN;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get numPages() {
        return this._numPages;
    }

    set numPages(newNumPages) {
        this._numPages = newNumPages;
    }

    showBook() {
        console.log(`The book ${this.title} with ISBN ${this.ISBN} created by the author ${this.author} has ${this.numPages} pages.`);
    }
}

let book1 = new Book("123456789", "Book A", "Author A", 200);
let book2 = new Book("987654321", "Book B", "Author B", 150);

book1.showBook();
book2.showBook();

if (book1.numPages > book2.numPages) {
    console.log("Book A has more pages than Book B.");
} else if (book1.numPages < book2.numPages) {
    console.log("Book B has more pages than Book A.");
} else {
    console.log("Both books have the same number of pages.");
}
