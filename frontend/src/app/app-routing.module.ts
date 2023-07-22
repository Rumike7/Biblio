import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { BooksComponent } from './books/books.component';

import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UploadComponent } from './upload/upload.component';
import { PreviewComponent } from './preview/preview.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const routes: Routes=[
  {path: 'preview', component: PreviewComponent},
  {path: 'upload', component: UploadComponent, canActivate: [AuthGuard]},
  {path: 'home', component: BooksComponent},
  {path: 'books/:name/:id', component: BookDetailsComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path: 'account', loadChildren: accountModule },
  {path: 'admin', loadChildren: adminModule, canActivate: [AdminGuard]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

