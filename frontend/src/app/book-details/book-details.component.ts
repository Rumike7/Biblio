import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, Comment } from '@app/_interfaces/book.interface';
import { User } from '@app/_interfaces/user.interface';
import { AccountService } from '@app/_services/account.service';
import { BookService } from '@app/_services/book.service';
import { GeneralService } from '@app/_services/general.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book!:Book;
  books:Book[]=[];
  rating=0;
  like=0;
  comment='';
  reply='';
  commentToReply!:Comment;
  user!:User;

  constructor(
    public general: GeneralService,
    private router: Router,
    private bookService: BookService,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
    this.book=this.bookService.bookValue;
    this.bookService.get(this.book.id).subscribe({
      next: (book:Book) => {
        console.log({book});
        this.book=book;
      },
      error: (error:any) => {
          console.log(error);
      }
    });


    this.user=this.accountService.userValue;

    // this.bookService.getAll().subscribe({
    //   next: (books:Book[]) => {
    //       console.log({books});
    //       this.books=books;
    //       this.books=this.general.shuffle(this.books);
    //       this.books=this.books.slice(0,3);
    //       const numBook=this.books.length;

    //   },
    //   error: (error:any) => {
    //       console.log(error);
    //   }
    // });

    this.bookService.myrate(this.book.id,Number(this.user.id)).subscribe({
      next: (rating:any) => {
        if(rating){
          this.like=rating.like;
          this.rating=rating.rating;

        };
        console.log({rating});
      },
      error: (error:any) => {
          console.log(error);
      }
    });

  }

  toPreview(){
    this.bookService.toPreview(this.book);
  }

  toBook(book:Book){
    console.log("toBook");
    this.bookService.setBook(book);
    this.router.navigate(['/books',book.filename,book.id]);
  }

  rate(){
    if(!this.user)this.router.navigate(['/account/login']);
    this.bookService.rate(this.book.id,Number(this.user.id),this.rating,this.like).subscribe({
      next: (rating) => {
        console.log({rating});

      },
      error: (error:any) => {
          console.log(error);
      }
    });
  }

  likeWithoutRate(){
    if(!this.user)this.router.navigate(['/account/login']);
    this.bookService.rate(this.book.id,Number(this.user.id),0,this.like).subscribe({
      next: (rating) => {
        console.log({rating});

      },
      error: (error:any) => {
          console.log(error);
      }
    });
  }

  commentBook(){
    if(!this.user)this.router.navigate(['/account/login']);
    this.bookService.comment(this.book.id,Number(this.user.id),this.comment,0).subscribe({
      next: (comment:Comment) => {
        console.log({comment});
        this.book.commentsWithReply.push();
      },
      error: (error:any) => {
          console.log(error);
      }
    });
  }

  replyComment(){
    if(!this.user)this.router.navigate(['/account/login']);
    this.bookService.comment(this.book.id,Number(this.user.id),this.reply,this.commentToReply.id).subscribe({
      next: (comment:Comment) => {
        console.log({comment});
        this.book.commentsWithReply.push();
      },
      error: (error:any) => {
          console.log(error);
      }
    });
  }




  likeBook(){
    if(!this.user)this.router.navigate(['/account/login']);
    if(this.like==0)this.book.liked++;
    else if(this.like==-1){this.book.liked++;this.book.disliked--}
    else this.book.liked--;
    this.like=this.like==1?0:1;

  }
  dislikeBook(){
    if(!this.user)this.router.navigate(['/account/login']);
    if(this.like==0)this.book.disliked++;
    else if(this.like==1){this.book.liked--;this.book.disliked++}
    else this.book.disliked--;
    this.like=this.like==-1?0:-1;
  }




}
