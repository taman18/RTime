import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: [ './user-management.component.scss' ],
})
export class UserManagementComponent {
  public date:any;
  public time:any;
  public meridiem:any;
  public tableData: any = {
    thead: [
      {
        id:'profile_picture',
        text:'Profile Picture',
        type: 'image',
      },
      {
        id:'id',
        text:'Id',
        type:'inputText',
      },
      {
        id: 'name',
        text: 'Name',
        type: 'inputText',
      },
      {
        id: 'email',
        text: 'Email',
        type: 'inputText',
      },

      {
        id:'role',
        text: 'Role',
        type: 'inputText',
      },
      {
        id:'action',
        text:'Action',
        type:'toggle',
      },
    ],
    tbody: [
      {
        id:'name',
        name:'Taman',
        email:'taman@',
        role: 'development',
        // profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Vishakha',
        email: 'vishakha@',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Nitesh',
        email: 'nitesh@',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'satyam',
        email: 'nitesh@',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id:'name',
        name:'Ankit',
        email: 'ankit@',
        // profile_picture: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ],
  };
  constructor () {
    this.refreshTime();
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
}
