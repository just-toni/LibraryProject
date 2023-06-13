let myLibrary = [];

class Book {

    constructor(author, title, genre, pages, read) {
        // the constructor...
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.pages = pages;
        this.read = read;
    };

    get getAuthor(){
        return this.author;
    }

    get getTitle(){
        return this.title;
    }

    get getGenre(){
        return this.genre;
    }

    get getPages(){
        return this.pages;
    }

    get getRead(){
        return this.read;
    }

    getBookInfo(){
        const result = `Author: ${this.author} \n Title: ${this.title} \n Genre: ${this.genre} \n Pages: ${this.pages}\n Status: ${this.read}`;
        return result;
    }

}

let body = document.querySelector('body');
let form = document.createElement('form');
let authorLabel = document.createElement('label');
let author = document.createElement('input');
author.setAttribute('type', 'text');
author.setAttribute('name', 'author');
authorLabel.setAttribute('for', 'author');
authorLabel.textContent = 'Author:';

let titleLabel = document.createElement('label');
let title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');
titleLabel.setAttribute('for', 'title');
titleLabel.textContent = 'Book Title:';

let genreLabel = document.createElement('label');
let genre = document.createElement('select');
genre.setAttribute('name', 'genre');
let thriller = document.createElement('option');
thriller.setAttribute('value', 'Thriller');
thriller.textContent = 'Thriller';
let romance = document.createElement('option');
romance.setAttribute('value', 'Romance');
romance.textContent = 'Romance';
let nonfiction = document.createElement('option');
nonfiction.setAttribute('value', 'Non-Fiction');
nonfiction.textContent = 'Non-Fiction';
let fiction = document.createElement('option');
fiction.setAttribute('value', 'Fiction');
fiction.textContent = 'Fiction';
let sciencefiction = document.createElement('option');
sciencefiction.setAttribute('value', 'Science-Fiction');
sciencefiction.textContent = 'Science-Fiction';
let fantasy = document.createElement('option');
fantasy.setAttribute('value', 'Fantasy');
fantasy.textContent = 'Fantasy';
let mystery = document.createElement('option');
mystery.setAttribute('value', 'Mystery');
mystery.textContent = 'Mystery';
let childLit = document.createElement('option');
childLit.setAttribute('value', 'Child-Literature');
childLit.textContent = 'Child Literature';
let classics = document.createElement('option');
classics.setAttribute('value', 'Classics');
classics.textContent = 'Classics';
let other = document.createElement('option');
other.setAttribute('value', 'Other');
other.textContent = 'Other';
genreLabel.setAttribute('for', 'genre');
genreLabel.textContent = 'Select genre:';
genre.appendChild(thriller);
genre.appendChild(romance);
genre.appendChild(nonfiction);
genre.appendChild(fiction);
genre.appendChild(fantasy);
genre.appendChild(sciencefiction);
genre.appendChild(childLit);
genre.appendChild(classics);
genre.appendChild(mystery);
genre.appendChild(other);

let pagesLabel = document.createElement('label');
let pages = document.createElement('input');
pages.setAttribute('type', 'number');
pages.setAttribute('name', 'pages');
pagesLabel.setAttribute('for', 'pages');
pagesLabel.textContent = 'Number of Pages:';

let readLabel = document.createElement('label');
let read = document.createElement('input');
read.setAttribute('type', 'checkbox');
read.setAttribute('name', 'read');
readLabel.setAttribute('for', 'read');
readLabel.textContent = 'I have read this book';

let submit = document.createElement('button');
submit.textContent = 'Add new book';
form.appendChild(authorLabel);
form.appendChild(author);
form.appendChild(titleLabel);
form.appendChild(title);
form.appendChild(genreLabel);
form.appendChild(genre);
form.appendChild(pagesLabel);
form.appendChild(pages);
form.appendChild(read);
form.appendChild(readLabel);
form.appendChild(submit);
body.appendChild(form);

function addBookToLibrary(author, title, genre, page, status) {
  // do stuff here
  const book1 = new Book(author, title, genre, page, status);
  myLibrary.push(book1);
}

function displayLibrary(){
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        let bookSection = document.createElement('section');
        let bookTitle = element
    }
}

let library = document.createElement('table');
let namesSection = document.createElement('td');
let name1 = document.createElement('th');
name1.textContent = 'Title';
let name2 = document.createElement('th');
name2.textContent = 'Author';
let name3 = document.createElement('th');
name3.textContent = 'Genre';
let name4 = document.createElement('th');
name4.textContent = 'No. of Pages';
let name5 = document.createElement('th');
name5.textContent = 'Status';
namesSection.appendChild(name1);
namesSection.appendChild(name2);
namesSection.appendChild(name3);
namesSection.appendChild(name4);
namesSection.appendChild(name5);
library.appendChild(namesSection);
body.appendChild(library);

submit.addEventListener('click', e => {
    e.preventDefault();
    let status = '';
    if(read.value === 'on'){
        status = 'read'
    }
    else status = 'unread';
    addBookToLibrary(author.value, title.value, genre.value, pages.value, status);
    let bookSection = document.createElement('tr');
    let bookTitle = document.createElement('td');
    bookTitle.textContent = title.value;
    let bookAuthor = document.createElement('td');
    bookAuthor.textContent = author.value;
    let bookGenre = document.createElement('td');
    bookGenre.textContent = genre.value;
    let bookPages = document.createElement('td');
    bookPages.textContent = pages.value;
    let bookStatus = document.createElement('td');
    let bookStatusbtn = document.createElement('button');
    bookStatusbtn.textContent = status;
    bookStatus.appendChild(bookStatusbtn);
    let delete_icon = document.createElement('td');
    let delete_icon_btn = document.createElement('button');
    let delete_icon_img = document.createElement('img');
    delete_icon_img.setAttribute('src', '/delete.png');
    delete_icon_img.setAttribute('alt', 'Delete Icon');
    delete_icon_btn.appendChild(delete_icon_img);
    delete_icon.appendChild(delete_icon_btn);
    bookSection.appendChild(bookTitle);
    bookSection.appendChild(bookAuthor);
    bookSection.appendChild(bookGenre);
    bookSection.appendChild(bookPages);
    bookSection.appendChild(bookStatus);
    bookSection.appendChild(delete_icon);
    library.appendChild(bookSection);

    delete_icon_btn.addEventListener('click', e =>{
        bookSection.textContent = '';
        bookSection.remove();

        // myLibrary.forEach(word => {
        //     word
        // })
    });

    let isRead = true;
    bookStatusbtn.addEventListener('click', e =>{
        if(isRead){
            bookStatusbtn.textContent = 'read';
            isRead = false;
        }
        else{
            bookStatusbtn.textContent = 'unread';
            isRead = true;
        }
    })
});
