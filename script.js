let myLibrary = [];

function Book (author, title, genre, pages, read) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.read = read;

    this.bookInfo = function(){
        let result = `Author: ${author} \n Title: ${title} \n Genre: ${genre} \n Pages: ${pages}\n Status: ${read}`;
        console.log(result);
        return result;
    }
};



let body = document.querySelector('body');

function addBookToLibrary() {
  // do stuff here
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
    thriller.setAttribute('value', 'thriller');
    thriller.textContent = 'Thriller';
    let romance = document.createElement('option');
    romance.setAttribute('value', 'romance');
    romance.textContent = 'Romance';
    let nonfiction = document.createElement('option');
    nonfiction.setAttribute('value', 'nonfiction');
    nonfiction.textContent = 'Non-Fiction';
    let fiction = document.createElement('option');
    fiction.setAttribute('value', 'fiction');
    fiction.textContent = 'Fiction';
    let sciencefiction = document.createElement('option');
    sciencefiction.setAttribute('value', 'sciencefiction');
    sciencefiction.textContent = 'Science-Fiction';
    let fantasy = document.createElement('option');
    fantasy.setAttribute('value', 'fantasy');
    fantasy.textContent = 'Fantasy';
    let mystery = document.createElement('option');
    mystery.setAttribute('value', 'mystery');
    mystery.textContent = 'Mystery';
    let childLit = document.createElement('option');
    childLit.setAttribute('value', 'childLit');
    childLit.textContent = 'Child Literature';
    let classics = document.createElement('option');
    classics.setAttribute('value', 'classics');
    classics.textContent = 'Classics';
    let other = document.createElement('option');
    other.setAttribute('value', 'other');
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
    read.setAttribute('type', 'text');
    read.setAttribute('name', 'read');
    readLabel.setAttribute('for', 'read');
    readLabel.textContent = 'Status:';
    
    let submit = document.createElement('button');
    submit.textContent = 'Submit';
    form.appendChild(authorLabel);
    form.appendChild(author);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(genreLabel);
    form.appendChild(genre);
    form.appendChild(pagesLabel);
    form.appendChild(pages);
    form.appendChild(readLabel);
    form.appendChild(read);
    form.appendChild(submit);
    body.appendChild(form);

    
    submit.addEventListener('click',e => {
        e.preventDefault();
        const book1 = new Book(author.value, title.value, genre.value, pages.value, read.value);
        let div = document.createElement('div');
        div.textContent = book1.bookInfo.toString();
        // let titleB = document.createElement('h3');
        // titleB.textContent = book1.title;
        // let name = document.createElement('h4');
        // name.textContent = book1.author;
        // let page = document.createElement('h4');
        // page.textContent = book1.pages;
        // let genreb = document.createElement('h4');
        // genreb.textContent = book1.genre + "pages";
        // let status = document.createElement('h5');
        // status.textContent = book1.read;
        // div.appendChild(title);
        // div.appendChild(name);
        // div.appendChild(genre);
        // div.appendChild(page);
        // div.appendChild(status);
        body.appendChild(div);
    });
}

addBookToLibrary();