import { Component } from '@angular/core';
import { LocalizedString } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'RTime';
  showSideBar:boolean = false;

  public istoken:any = localStorage.getItem('token');
  constructor (private route:Router) {
    if(this.istoken) {
      console.log('login krooo', this.istoken);
      route.navigate([ 'dashboard' ]);
    }
  }

}
