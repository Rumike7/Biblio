import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private router: Router,
  ) {

  }

  withoutCore(){
    return this.router.url.split('/')[1]==='admin' || this.router.url.split('/')[1]==='preview' || this.router.url.split('/')[1]==='account';
  }
}
