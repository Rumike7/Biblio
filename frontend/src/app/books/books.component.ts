import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book} from '@app/_interfaces/book.interface';
import { AccountService } from '@app/_services/account.service';
import { BookService } from '@app/_services/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownSelectChoice } from '@app/_interfaces/dropdown-select-choice';
import { ValuesService } from '@app/_services/values.service';
import { GeneralService } from '@app/_services/general.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  keysearch:boolean = true;
  form!:FormGroup;
  books:Book[]=[];
  error:boolean=false;


  numberPerPage:number=6;
  pagesFromOne:number[]=[];
  page:number=0;
  numberOfPage:number=0;
  rows:number[]=[];

  constructor(private bookService: BookService,
    private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    public general: GeneralService,
    public values : ValuesService
    ) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe({
      next: (books:Book[]) => {
          console.log({books});
          this.books=books;
          this.books=this.general.shuffle(this.books);
          const numBook=this.books.length;
          this.numberOfPage=Math.ceil(numBook/this.numberPerPage);
          this.pagesFromOne=[];
          this.rows=[];
          for(let i=0;i<this.numberOfPage;i++){
            this.pagesFromOne.push(i+1);
          }
      },
      error: (error:any) => {
          this.error=true;
          console.log(error);
      }
    });
    console.log("Book list");
    console.log(this.accountService.userValue);

    this.form=this.formBuilder.group({
      keyword: [''],
      faculty: [''],
      domain: [''],
      type: [''],
      title: [''],
      searchOption: ['keyword'],

    })
  }

  toBook(book:Book){
    console.log("toBook");
    this.bookService.setBook(book);
    this.router.navigate(['/books',book.filename,book.id]);
  }

  get f() { return this.form.controls; }


  search(v: string){
    this.form.controls['searchOption'].setValue('v');
    this.keysearch = v=="keyword";


  }

  onSubmit(){
    console.log("onSubmit");
    console.log(this.form.value);
    console.log(this.f);
    this.bookService.search(this.form,this.keysearch).subscribe();
  }


  precPage(){
    if(this.page>0)this.page--;
  }



  nextPage(){
    if(this.page<this.numberOfPage-1)this.page++;
  }
}
