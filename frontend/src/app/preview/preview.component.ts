import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/_interfaces/book.interface';
import { BookService } from '@app/_services/book.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  book!:Book;
  data:any;
  bookPath:string|undefined;
  trustedPath!:SafeResourceUrl;
  constructor(private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.book=this.bookService.bookValue;
    console.log(this.book);
    this.bookPath="api/"+this.book.file;
    this.trustedPath=this.sanitizer.bypassSecurityTrustResourceUrl(this.bookPath);
  }

}
