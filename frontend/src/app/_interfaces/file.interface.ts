import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export interface FileProgress {
    filename:string;
    file:File;
    error:boolean;
    uploadProgress:number;
    faculty: string;
    domain: string;
    type: string;
    uploadSub?: Subscription;
}

