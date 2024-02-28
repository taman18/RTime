import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  public apiData:any;
  public meridiem:any;
  public tableHeading:[] = [];
  public tableBody:[] = [];
  data: any[] = [];  // Your data goes here
  filteredData: any[] = [];
  searchTerm: string = '';
  public receivedMessage: any;


  constructor (private timesheetService:TimesheetService) {
    this.getUesrData();
    this.refreshTime();
  }



  async getUesrData () {
    await this.timesheetService.getData().then(
      (userdata: any) => {
        this.apiData = userdata.result;
        this.userData.tbody = userdata.result.data;
        console.log('aaaa: ', userdata.result.data);
        this.userData.tbody = userdata.result.data.map((item: any) => {
          return {
            ...item,
            _id: item._projectId._id,
            _projectName: item._projectId.projectName,
            username: item.username,
            from_date: item.startTime,
            to_date: item.endTime,
            update_time:item.updatedAt,
          };
        });
        // console.log( this.myData.tbody)
      },
      (error) => {
        console.log(error);
      },
    );
  }


  receiveMessage (message: string) {
    this.receivedMessage = message;
  }


  ngOnInit (): void {
    this.userData.body = this.apiData;
    console.log(this.userData.body);
  }


  dataSource: MatTableDataSource<any> | undefined;
  displayedColumns: string[] = [ 'column1', 'column2', 'column3' ]; // Adjust column names
  @ViewChild(MatSort) sort: MatSort | undefined;



  filterData (): void {
    this.filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
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

  }
  receivedData: string | undefined;
  handleData (data: string) {
    this.receivedData = data;
  }
  refreshBtn () {
    this.refreshTime();
    this.getUesrData();
  }
}
