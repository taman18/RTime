import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { TimesheetService } from '../services/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: [ './timesheet.component.scss' ],
})
export class TimesheetComponent implements OnInit {
  public date:any;
  public time:any;
  userData: any;
  public meridiem:any;
  // public button:boolean = false;
  public tableHeading:[] = [];
  public tableBody:[] = [];
  data: any[] = [];  // Your data goes here
  filteredData: any[] = [];
  searchTerm: string = '';

  constructor (private timesheetService:TimesheetService, private searchService: SearchService) {
    this.timesheetService.getData();
    // console.log('hi');
    this.refreshTime();
  }
  ngOnInit () {
    // this.getData();
    this.getUesrData();
    this.searchService.search$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.filterData();
    });
  }
  filterData (): void {
    this.filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  getUesrData () {
    this.timesheetService.getData().subscribe(
      (userdata: any) => {
        console.log('hi');
        console.log(userdata.result.data);
        console.log(this.tableHeading);
      },
      (error) => {
        console.log(error);
      },
    );
  }
  public myData: any = {
    thead: [
      {
        id:'project_ID',
        text:'project ID',
        type: 'inputText',
      },
      {
        id:'prjectName',
        text:'Project Name',
        type:'inputText',
      },
      {
        id: 'Name',
        text: 'Name',
        type: 'inputText',
      },
      {
        id: 'description',
        text: 'Description',
        type: 'inputText',
      },

      {
        id:'from_date',
        text: 'From Date',
        type: 'inputText',
      },
      {
        id:'to_date',
        text:'To Date',
        type:'inputText',
      },
      {
        id:'total_time',
        text:'Total Time',
        type:'inputText',
      },
    ],
    tbody: [
      {
        project_ID: '213178',
        prjectName: 'R Time',
        Name: 'Tamanjeet',
        description: 'Working on API integration',
        from_date: '10-02-2024',
        to_date: '02-02-2024',
        total_time: '21',
      },
      {
        project_ID: '121764',
        prjectName: 'Bot penguine',
        Name: 'Ishika',
        description: 'UI integration',
        from_date: '11-01-2024',
        to_date: '03-02-2024',
        total_time: '23',
      },
    ],
  };

  getData () {
  //   this.timesheetService.getData().subscribe(
  //     (response) => {
  //       console.log('taman');
  //       this.userData = response;
  //       console.log(this.userData);

  //     },
  //     (error) => {
  //       console.log('taman');
  //       console.error('Error fetching data', error);
  //       console.log('hi');
  //     },
  //   );
  //   const data = this.timesheetService.getData();
  //   console.log(data);
  }




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
    // console.log(this.receivedData);
  }
  refreshBtn () {
    // console.log('clicked');
    this.getUesrData();
  }
}
