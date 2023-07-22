import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  private apiUrl = '/api/values';
  faculties: string[]=[];
  domains: string[]=[];
  types: string[]=[];

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) {
    this.get().subscribe((values:any) => {
      console.log({values});
      if(values.faculties)this.faculties=values.faculties;
      if(values.domains)this.domains=values.domains ;
      if(values.types)this.types=values.types ;
    })
  }
  get(){
    // Only the first id object has value
    const url = `${this.apiUrl}/${1}`;
    return this.http.get<any>(url);
  }
  update(dataarray: string[],type:number) {
    const url = `${this.apiUrl}/${type}`;
    //0 faculties
    //1 domains
    //2 types
    return this.http.put<any>(url, {dataarray}).subscribe({
      next: (res) => {
         console.log(res);
      },
      error: error => {
          this.alertService.error(error);
      }
  });
  }
}
