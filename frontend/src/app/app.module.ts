import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import{HttpClientModule} from '@angular/common/http';
import { fakeBackendProvider } from './_interceptors/fake-backend.interceptor';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './_core/nav/nav.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewsletterComponent } from './other/newsletter/newsletter.component';
import { AlertComponent } from './alert/alert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadingComponent } from './uploading/uploading.component';
import { UploadComponent } from './upload/upload.component';
import { CommentComponent } from './contact/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooksComponent,
    BookDetailsComponent,
    NewsletterComponent,
    AlertComponent,
    UploadingComponent,
    UploadComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
