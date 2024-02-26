import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: [ './user-bio.component.scss' ],
})
export class UserBioComponent implements OnInit {
  public storedUserData:any;
  public userData:any;
  public email = '';
  public date:any;
  public time:any;
  public meridiem:any;
  public allData:any;
  public tableData: any = {
    thead: [
      {
        id:'device_ip',
        text:'Device IP',
        type: 'inputText',
      },
      {
        id:'location',
        text:'Location',
        type:'inputText',
      },
      {
        id: 'date',
        text: 'Date',
        type: 'inputText',
      },
      {
        id: 'login_time',
        text: 'Login Time',
        type: 'inputText',
      },

      {
        id:'logout_time',
        text: 'Logout Time',
        type: 'inputText',
      },
      {
        id:'duration',
        text:'Duration',
        type:'inputText',
      },
    ],
    tbody: [],
  };
  // Check if data exists in local storage


  // Now `userData` contains the object previously stored in local storage
  // Use it as needed
  constructor (
    private userdataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.refreshTime();

  }

  ngOnInit (): void {
    this.email = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getUesrData();
    // this.storedUserData = localStorage.getItem('userData');
    if(this.storedUserData) {
      // const userData = JSON.parse(this.storedUserData);
      // this.userData = userData;
      // console.log(this.userData);
    }
  }

  getUesrData () {
    this.userdataService.getData(this.email).subscribe(
      (userdata: any) => {
        // console.log('hi');
        this.allData = userdata;
        this.tableData.tbody = userdata.result;
        console.log(this.tableData.tbody);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  refreshTime () {
    this.getDate();
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
  refreshBtn () {
    console.log('clicked');
    this.getUesrData();
    this.refreshTime();
  }
  goBack () {
    // console.log('back')
    this.router.navigate([ '/user-management' ]);
  }
}
