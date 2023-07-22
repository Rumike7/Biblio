import { Component, OnInit } from '@angular/core';
import { FileProgress } from '@app/_interfaces/file.interface';
import { User } from '@app/_interfaces/user.interface';
import { AccountService } from '@app/_services/account.service';
import { FileUploadService } from '@app/_services/file-upload.service';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss']
})
export class UploadingComponent implements OnInit {
  filesProgress:FileProgress[]=[];
  user!:User;
  constructor(
    private fileUploadService:FileUploadService,
    private accountService: AccountService
    ) {
  }

  ngOnInit(): void {
    this.user=this.accountService.userValue;
    this.filesProgress=this.fileUploadService.filesProgressValue;
    this.fileUploadService.triggerUploading$.subscribe(fP=>{
      this.filesProgress=this.fileUploadService.filesProgressValue.reverse();
      const chatButton = document.querySelector('.chat-btn') as HTMLElement;
      if (chatButton) {
        chatButton.click();
      }
      if(this.filesProgress)
        this.filesProgress.forEach(fileProgress=>{
          if(fileProgress.uploadProgress<100 && !fileProgress.error)
          this.fileUploadService.uploadFile(fileProgress);
          console.log({"uploading":this.filesProgress});
        });
    })
  }

  cancelUpload(fileProgress:FileProgress) {
    this.fileUploadService.cancelUpload(fileProgress);
  }
  init(){
    this.fileUploadService.initFilesProgress();
    console.log(this.filesProgress);
  }

}
