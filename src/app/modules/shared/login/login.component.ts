import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent implements OnInit {
  GOOGLE_URL = 'https://536a-203-100-78-18.ngrok-free.app/google';
  public date:any;
  public time:any;
  public meridiem:any;
  public token:any;
  constructor (private loginService: LoginService,
   private router : Router) {
    this.refreshTime();
    this.token = localStorage.getItem('token');
  }
  refreshTime () {
    this.getDate();
  }
  ngOnInit () {
    if(this.token)
    {
      this.router.navigate([ '/dashboard' ]);
    }
  }
  openURL () {
    window.open(this.GOOGLE_URL, '_self');
  }

  getDate () {
    // Get current date and time
    const currentDateAndTime: Date = new Date();

    // Extract individual components
    const currentYear: number = currentDateAndTime.getFullYear();
    const currentMonth: number = currentDateAndTime.getMonth() + 1;
    const currentDay: number = currentDateAndTime.getDate();
    let currentHour: number = currentDateAndTime.getHours();
    const currentMinute: number = currentDateAndTime.getMinutes();
    const currentSecond: number = currentDateAndTime.getSeconds();
    this.meridiem = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12 || 12;
    this.date = `${ currentDay  }/${  currentMonth  }/${  currentYear }`;
    this.time = `${ currentHour  }:${  currentMinute  }:${  currentSecond }`;
    // console.log();
    // console.log(this.time+' '+meridiem);
  }
  openUrl () {
    window.open(this.GOOGLE_URL, '_self');
  }

}
