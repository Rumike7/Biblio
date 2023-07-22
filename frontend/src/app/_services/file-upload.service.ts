import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  FileProgress } from '@app/_interfaces/file.interface';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private fileUploadSubject:BehaviorSubject<FileProgress[]>;
  public filesProgress: Observable<FileProgress[]>;

  error:boolean=false;
  private apiUrl="/api";

  private triggerUploadingSource = new Subject<void>();
  triggerUploading$ = this.triggerUploadingSource.asObservable();



  constructor(private http:HttpClient, private router:Router,
    private accountService:AccountService) {
    this.fileUploadSubject = new BehaviorSubject<FileProgress[]>((JSON.parse(<string>localStorage.getItem('filesProgress'))));
    this.filesProgress=this.fileUploadSubject.asObservable();

   }


  getFiles(event:Event):FileList{
    const files:FileList= (<FileList>(<HTMLInputElement>event.target).files);
    return files;
  }

  public get filesProgressValue(): FileProgress[] {
    return this.fileUploadSubject.value;
  }


  uploadFile(fileProgress:FileProgress){
    const formData = new FormData();
      formData.append("file", fileProgress.file);
      formData.append("user_id", this.accountService.userValue.id);
      formData.append("domain", fileProgress.domain);
      formData.append("faculty", fileProgress.faculty);
      formData.append("type", fileProgress.type);


    const upload$ = this.http.post(this.apiUrl+'/books', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
        finalize(() => this.reset(fileProgress))
    );


  fileProgress.uploadSub = upload$.subscribe({
    next:(event) => {
      console.log({"uploadFine work":this.filesProgressValue});
      if (event.type == HttpEventType.UploadProgress) {
        if(event.total===undefined)
          fileProgress.uploadProgress =0;
        else
        fileProgress.uploadProgress = Math.round(100 * (event.loaded / event.total));
      }
      this.setFilesProgress(this.filesProgressValue);
    },
    error:(err:any)=>{
      console.log({"uploadFine error":this.filesProgressValue});
      fileProgress.error=true;
      console.log(err);
    }
    })

  }
  cancelUpload(fileProgress:FileProgress) {
    if(fileProgress.uploadSub)fileProgress.uploadSub.unsubscribe();
    this.reset(fileProgress);
  }

  reset(fileProgress:FileProgress) {
    fileProgress.uploadProgress = 100;
    fileProgress.uploadSub = undefined;
  }
  setFilesProgress(filesProgress:FileProgress[]){
    
    
    filesProgress.forEach(fileProgress=>{
        fileProgress.uploadSub = undefined;
    });
    localStorage.setItem('filesProgress', JSON.stringify(filesProgress));
    this.fileUploadSubject.next(filesProgress);
  }


  initFilesProgress(){
    this.setFilesProgress([]);
  }

  triggerUploading(): void {
    this.triggerUploadingSource.next();
  }
}
