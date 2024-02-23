import { ActiveUser, ApiResponse, IncorrectTimeSheetResponse, TimeSheetHoursResponse, User } from '../users';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {
  totalUserCount: number = 0;
  totalActiveUsers: ActiveUser[] = [];
  filledTimeSheet: number  = 0;
  missedTimeSheet: number  = 0;
  totalTimeSheetHours: TimeSheetHoursResponse[] = [];
  totalCountOfIncorrectTimesheet: IncorrectTimeSheetResponse[] = [];


  activeUsers = [
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
  ];

  showFilters = false;

  public meridiem: any;
  public date: any;
  public time: any;

  constructor (private router: Router,
    private dashboardService: DashboardService) {
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
    this.date = `${ currentDay }/${ currentMonth }/${ currentYear }`;
    this.time = `${ currentHour }:${ currentMinute }:${ currentSecond }`;
  }

  ngOnInit () {
    this.getTotalUsers();
    this.getActiveUsers();
    this.getFilledMissedTimeSheetToday();
    this.getTotalTimesheetHours();
    this.getTotalCountOfIncorrectTimesheet();
  }

  getTotalUsers ()
  {
    this.dashboardService.getUsers().subscribe((users: User) => {
      this.totalUserCount = users.result;
    });
  }

  //Recent 5 Active Users
  getActiveUsers ()
  {
    this.dashboardService.getFiveActiveUsers().subscribe((users: {result : ActiveUser[]}) => {
      this.totalActiveUsers = users.result;
      console.log(this.totalActiveUsers);
    });
  }

  getFilledMissedTimeSheetToday ()
  {
    this.dashboardService.getFilledMissedTimeSheet().subscribe((users:ApiResponse) => {
      this.filledTimeSheet = users.result.todayNumberOfFilledUsers;
      this.missedTimeSheet = users.result.todayNumberOfUnfilledUsers;
      console.log(users);
    });
  }

  getTotalTimesheetHours ()
  {
    this.dashboardService.getTotalTimesheetHoursToday().subscribe((users: {result : TimeSheetHoursResponse[]}) => {
      this.totalTimeSheetHours = users.result;
      console.log(users);
    });
  }

  getTotalCountOfIncorrectTimesheet ()
  {
    this.dashboardService.getTotalCountOfIncorrectTimesheetYesterday().subscribe((users: {result : IncorrectTimeSheetResponse[]}) => {
      this.totalCountOfIncorrectTimesheet = users.result;
      console.log(users);
    });
  }



}
