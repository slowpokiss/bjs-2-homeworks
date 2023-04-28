class PrintEditionItem {

  constructor (name, releaseDate, pagesCount){
    this._state = 100;
    this.type = null;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(numb) {
    if (numb < 0) {
      this._state = 0;
    } if (numb > 100) {
      this._state = 100;
    } else {
      this._state = numb;
    }
  }

  get state() {
    return this._state;
  }
}



class Magazine extends PrintEditionItem {
  type = "magazine";

  constructor (name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
  }
}

class Book extends PrintEditionItem {
  type = "book";

  constructor (author, name, releaseDate, pagesCount, ) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
}

class NovelBook extends Book{
  type = "novel";
}


class FantasticBook  extends Book{
  type = "fantastic";
}

class DetectiveBook  extends Book{
  type = "detective";
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);


// задание 2
class Library {
  name;
  books = [];

  constructor (name){
    this.name = name;
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book)
    } 
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      const a = Object.entries(this.books[i]);
      for (let j = 0; j < a.length; j++) {
        if ((a[j][0] === type) && ((a[j][1]) === value)) {
          return this.books[i];
        }
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const a = this.books[i];
        this.books.splice(i, 1); 
        return a;
      }     
    }
    return null;
  }
}
