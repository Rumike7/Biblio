import { Component, OnInit } from '@angular/core';
import { Book} from '@app/_interfaces/book.interface';
import { BookService } from '@app/_services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  error:boolean=false;
  choosed:boolean=false;
  books:Book[]=[];
  acceptingBook!: Book;
  unverified_books:Book[]=[];
  verified_books:Book[]=[];
  description:string='';


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllAdmin().subscribe({
      next: (books:Book[]) => {
          console.log({books});
          this.books=books.reverse();
          this.unverified_books=this.books.filter(b=>{return b.accepted==0});
          this.verified_books=this.books.filter(b=>{return b.accepted!=0});

      },
      error: (error:any) => {
          this.error=true;
          console.log(error);
      }
    });
  }

  toPreview(book:Book){
    this.bookService.toPreview(book);
  }

  verifyBook(book: Book): void {
    const bookIndex = this.unverified_books.findIndex(b => b.id === book.id);

    if (bookIndex !== -1) {
      const verifiedBook = this.unverified_books.splice(bookIndex, 1)[0];
      this.verified_books.push(verifiedBook);
    }
  }
  selectForAccept(book:Book){
    this.acceptingBook=book;
  }
  accept(){
    this.bookService.changeState(this.acceptingBook,1,this.description);
    this.verifyBook(this.acceptingBook);
  }
  reject(book:Book){
    this.bookService.changeState(book,-1,'');
    this.verifyBook(book);
  }


}


