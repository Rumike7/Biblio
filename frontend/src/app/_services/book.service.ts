import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, Comment } from '@app/_interfaces/book.interface';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubject: BehaviorSubject<Book>;
  public book: Observable<Book>;
  private apiUrl="/api/books";
  private apiAdminUrl="/api/admin/books";
  private apiRatingUrl="/api/admin/ratings";

  constructor(
    private router: Router,
    private http: HttpClient
    ) {
    this.bookSubject = new BehaviorSubject<Book>(JSON.parse(<string>localStorage.getItem('book')));
    this.book = this.bookSubject.asObservable();
  }
  public get bookValue(): Book {
      return this.bookSubject.value;
  }
  setBook(book:Book){
    localStorage.setItem('book', JSON.stringify(book));
    this.bookSubject.next(book);
  }
  get(bookId:number){
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`);
  }

  getAll(){
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }
  getAllAdmin(){
    return this.http.get<Book[]>(`${this.apiAdminUrl}`);
  }

  changeState(book:Book, accepted: number, description :string){
    book.accepted=accepted;
    book.description=description;
    console.log(book);
    return this.http.put(`${this.apiAdminUrl}/${book.id}`, book).subscribe({
      next: (book) => {
        console.log({book});
      },
      error: (error:any) => {
          console.log(error);
      }
    });
  }

  rate(bookId:number, userId:number, rating: number, like : number){
    return this.http.post(`${this.apiUrl}/rate`,{
      "book_id":bookId,
      "user_id":userId,
      "rating":rating,
      "like":like,
    });
  }

  myrate(bookId:number, userId:number){
    return this.http.post(`${this.apiUrl}/myrate`,{
      "book_id":bookId,
      "user_id":userId,
    });
  }

  comment(bookId:number, userId:number, text: string, parentId : number){
    return this.http.post<Comment>(`${this.apiUrl}/comment`,{
      "book_id":bookId,
      "user_id":userId,
      "text":text,
      "parentId":parentId
    });
  }








  toPreview(book:Book){
    this.setBook(book);
    this.router.navigate(['/preview']);
  }

  search(form:FormGroup<any>,keysearch:boolean){
      return this.http.post(this.apiUrl+'/search/',{form:form.value,keysearch:keysearch});
  }
}
