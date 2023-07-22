import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileProgress } from '@app/_interfaces/file.interface';
import { User } from '@app/_interfaces/user.interface';
import { AccountService } from '@app/_services/account.service';
import { AlertService } from '@app/_services/alert.service';
import { FileUploadService } from '@app/_services/file-upload.service';
import { ValuesService } from '@app/_services/values.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit,OnDestroy {
  requiredFileType:string=".pdf";
  user!:User;
  bookForm!: FormGroup;
  loading = false;
  submitted = false;
  name = "Angular " + VERSION.major;
  uploaded_files:File[]=[];
  multiple:boolean=true;
  filesProgress: FileProgress[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService,
    private accountService: AccountService,
    private alertService: AlertService,
    private router:Router,
    public values : ValuesService

) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      domain: ['', Validators.required],
      faculty: ['', Validators.required],
      type: ['', Validators.required],
    });

    console.log("Upload Layout");
    this.user=this.accountService.userValue;
    console.log(this.user);

    this.filesProgress=this.fileUploadService.filesProgressValue;
    console.log(this.filesProgress);
    const button = document.querySelector("#selectbutton"); //Finds the button by id.
    button?.addEventListener("click", e => { //Runs the function (doesn't have to be an arrow function, just a function.) whenever said button is clicked.
        e.preventDefault(); //Stops said button from reloading the page.
    });
    const button2 = document.querySelector("#uploadbutton"); //Finds the button by id.
    button2?.addEventListener("click", e => { //Runs the function (doesn't have to be an arrow function, just a function.) whenever said button is clicked.
        e.preventDefault(); //Stops said button from reloading the page.
    });
  }
  get f() { return this.bookForm.controls; }

  ngOnDestroy(): void {

  }


  onFileSelected(event:Event) {
    console.log("onFileSelected");
    console.log(this.requiredFileType);
    const files:FileList= this.fileUploadService.getFiles(event);
    const file:File=files[0];
    for(let i=0;i<files.length;i++){
      console.log(files[i]);
      this.uploaded_files.push(files[i]);
    }
  }

  onUpload(){

    console.log("onUpload");
    console.log(this.filesProgress);
    if(!this.filesProgress)this.filesProgress=[];
    for(let i=0;i<this.uploaded_files.length;i++){
      if(!this.filesProgress.some(x=>x.file.name==this.uploaded_files[i].name)){
        (<FileProgress[]>this.filesProgress).push({
          "file":this.uploaded_files[i],
          "filename":this.uploaded_files[i].name,
          "uploadProgress":0,
          "error":false,
          "domain": this.bookForm.value.domain,
          "type": this.bookForm.value.type,
          "faculty": this.bookForm.value.faculty,
        })
      }
      // else
      //   console.log(this.uploaded_files);
    }
    this.fileUploadService.setFilesProgress(this.filesProgress);
    this.fileUploadService.triggerUploading();
    this.router.navigate(['/']);
  }

  deleteFile(i:number){
    this.uploaded_files.splice(i,1);
  }




}
