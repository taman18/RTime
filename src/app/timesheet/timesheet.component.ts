import { Component } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: [ './timesheet.component.scss' ],
})
export class TimesheetComponent {
  public date:any;
  public time:any;
  public meridiem:any;
  public button:boolean = false;
  public tableData: any = {
    thead: [
      {
        id:'Project_Id',
        text:'Project Id',
        type: 'inputText',
      },
      {
        id:'Project_Name',
        text:'Project Name',
        type:'inputText',
      },
      {
        id: 'User_Name',
        text: 'User Name',
        type: 'inputText',
      },
      {
        id: 'Description',
        text: 'Decription',
        type: 'inputText',
      },

      {
        id:'Log_Hours',
        text: 'Log Hours',
        type: 'inputText',
      },
      // {
      //   id:'action',
      //   text:'Action',
      //   type:'toggle',
      // },
    ],
    tbody: [
      {
        Project_Id:'F102164',
        Project_Name: 'R Time',
        User_Name: 'Aakash',
        Description: 'Navbar UI',
        Log_Hours:'9 hrs 34 minutes',
      },
      {
        Project_Id:'F1402164',
        Project_Name: 'Bot penguin',
        User_Name: 'Raman',
        Description: 'Integration of all components',
        Log_Hours:'10 hrs 56 minutes',
      },
      {
        Project_Id:'D475164',
        Project_Name: 'Kardi',
        User_Name: 'Varun',
        Description: 'API integration',
        Log_Hours:'9 hrs 12 minutes',
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
  receivedData: string | undefined;
  handleData (data: string) {
    this.receivedData = data;
    console.log(this.receivedData);
  }
}
