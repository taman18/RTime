import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  activeUsers = [
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
    { name: 'Tom Holand', imageUrl: '../assets/images/Ellipse 524.png' },
  ];
  data = {
    totalUsers: '1,629',
  };

  showFilters = false;
  selectedSports = 'Cricket';
  activeBot = { id: 1, name: 'Nora' };

  optionList = [
    { title: 'Soccer', value: 'soccer' },
    { title: 'Cricket', value: 'cricket' },
    { title: 'Basket Ball', value: 'basketBall' },
    { title: 'American Football', value: 'americanFootball' },
  ];

  bots = [
    {
      id: 1, name: 'Nora', chartPerRow: 2, graphs: [
        {
          type: 'doughnut', id: 'nora_users', class: 'col-md-6', title: 'Users', data: [],
          label: [ { color: '#4DAAE2', title: 'Registered', value: '1,891' }, { color: '#282828', title: 'Not Registered', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'nora_predictions', class: 'col-md-6', title: 'Predictions', data: [],
          label: [ { color: '#4DAAE2', title: 'Win', value: '1,891' }, { color: '#282828', title: 'Loss', value: '1,029' } ],
        },
        {
          type: 'bar', id: 'nora_teams', class: 'col-md-12', title: 'Teams', data: [],
          label: [ { color: '#4DAAE2', title: 'Players', value: '1,891' }, { color: '#282828', title: 'Not Registered', value: '1,029' } ],
        },

        {
          type: 'doughnut', id: 'nora_prediction_type', class: 'col-md-6', title: 'Prediction Type', data: [],
          label: [ { color: '#4DAAE2', title: 'For Fun', value: '1,891' }, { color: '#265D35', title: 'Paid', value: '1,029' }, { color: '#282828', title: 'No Predictions Yet', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'nora_payments', class: 'col-md-6', title: 'Payments', data: [],
          label: [ { color: '#4DAAE2', title: 'Cards', value: '1,891' }, { color: '#265D35', title: 'Apple Pay', value: '1,029' }, { color: '#282828', title: 'Others', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'nora_payout', class: 'col-md-6', title: 'Payout', data: [],
          label: [ { color: '#4DAAE2', title: 'Success', value: '1,891' }, { color: '#282828', title: 'Fail', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'nora_customer_rating', class: 'col-md-6', title: 'Customer Rating', data: [],
          label: [ { color: '#4DAAE2', title: 'Wow', value: '1,891' }, { color: '#5D2FD1', title: 'Happy', value: '1,029' }, { color: '#265D35', title: 'Average', value: '1,029' }, { color: '#282828', title: 'Poor', value: '1,029' } ],

        },
        {
          type: 'doughnut', id: 'nora_channels_used', class: 'col-md-6', title: 'Channels Used', data: [],
          label: [ { color: '#4DAAE2', title: 'Whatsapp', value: '1,891' }, { color: '#5D2FD1', title: 'In-app', value: '1,029' },
            { color: '#265D35', title: 'Web Page', value: '1,029' }, { color: '#B4304F', title: 'Telegram', value: '1,029' }, { color: '#282828', title: 'WeChat', value: '1,029' } ],
        },
      ],
    },
    {
      id: 2, name: 'Adam', chartPerRow: 3, graphs: [
        {
          type: 'doughnut', id: 'adam_users', class: 'col-md-4', title: 'Users Types', data: [],
          label: [ { color: '#4DAAE2', title: 'Business', value: '1,891' }, { color: '#282828', title: 'Individuals', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_users_2', class: 'col-md-4', title: 'Users Activity', data: [],
          label: [ { color: '#4DAAE2', title: 'Shipped', value: '1,891' }, { color: '#282828', title: 'Not Yet Shipped', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_users_3', class: 'col-md-4', title: 'Users Activity Type', data: [],
          label: [ { color: '#4DAAE2', title: 'Business Shipped', value: '1,891' }, { color: '#282828', title: 'Individual Shipped', value: '1,029' } ],
        },
        {
          type: 'bar', id: 'adam_carrier', class: 'col-md-12', title: 'Carrier', data: [],
          label: [ { color: '#4DAAE2', title: 'Registered', value: '1,891' }, { color: '#282828', title: 'Not Registered', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_business_users', class: 'col-md-4', title: 'Business Users', data: [],
          label: [ { color: '#4DAAE2', title: 'Added Stores', value: '1,891' }, { color: '#282828', title: 'Not Yet Added Stores', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_shipment_type', class: 'col-md-4', title: 'Shipment Type', data: [],
          label: [ { color: '#4DAAE2', title: 'Parcel', value: '1,891' }, { color: '#282828', title: 'Documents', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_pickup_time', class: 'col-md-4', title: 'Pickup Time', data: [],
          label: [ { color: '#4DAAE2', title: 'Now ', value: '1,891' }, { color: '#5D2FD1', title: '8am-12pm', value: '1,029' }, { color: '#265D35', title: '12pm-4pm', value: '1,029' }, { color: '#282828', title: '4pm-8pm', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_customer_rating', class: 'col-md-4', title: 'Customer Rating', data: [],
          label: [ { color: '#4DAAE2', title: 'Wow', value: '1,891' }, { color: '#5D2FD1', title: 'Happy', value: '1,029' }, { color: '#265D35', title: 'Average', value: '1,029' }, { color: '#282828', title: 'Poor', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_channels_used', class: 'col-md-4', title: 'Channels Used', data: [],
          label: [ { color: '#4DAAE2', title: 'Whatsapp', value: '1,891' }, { color: '#5D2FD1', title: 'In-app', value: '1,029' },
            { color: '#265D35', title: 'Web Page', value: '1,029' }, { color: '#B4304F', title: 'Telegram', value: '1,029' }, { color: '#282828', title: 'WeChat', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'adam_shipment_options', class: 'col-md-4', title: 'Shipment Options', data: [],
          label: [ { color: '#4DAAE2', title: 'Ship', value: '1,891' }, { color: '#282828', title: 'Return', value: '1,029' } ],
        },
      ],
    },
    {
      id: 3, name: 'Sarah', chartPerRow: 3, graphs: [
        {
          type: 'doughnut', id: 'sarah_users', class: 'col-md-4', title: 'Users', data: [],
          label: [ { color: '#4DAAE2', title: 'Registered', value: 5000 }, { color: '#282828', title: 'Not Registered', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_booking_types', class: 'col-md-4', title: 'Booking Types', data: [],
          label: [ { color: '#4DAAE2', title: 'Hotel', value: '1,891' }, { color: '#5D2FD1', title: 'Cars', value: '1,029' }, { color: '#265D35', title: 'Flights', value: '1,029' }, { color: '#282828', title: 'Restaurants', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_users_2', class: 'col-md-4', title: 'Users', data: [],
          label: [ { color: '#4DAAE2', title: 'Returned Customers', value: '1,891' }, { color: '#282828', title: 'Not Returned Customers', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_flight_type', class: 'col-md-4', title: 'Flight Type', data: [],
          label: [ { color: '#4DAAE2', title: 'International', value: '1,891' }, { color: '#282828', title: 'Domestic', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_hotel_type', class: 'col-md-4', title: 'Hotel Type', data: [],
          label: [ { color: '#4DAAE2', title: 'City Hotel', value: '1,891' }, { color: '#5D2FD1', title: 'Resort', value: '1,029' }, { color: '#265D35', title: 'Served Apartment', value: '1,029' }, { color: '#282828', title: 'Villas', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_car_type', class: 'col-md-4', title: 'Car Type', data: [],
          label: [ { color: '#4DAAE2', title: 'Small', value: '1,891' }, { color: '#5D2FD1', title: 'Medium', value: '1,029' }, { color: '#265D35', title: 'Family', value: '1,029' }, { color: '#282828', title: 'Fancy', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_customer_rating', class: 'col-md-4', title: 'Customer Rating', data: [],
          label: [ { color: '#4DAAE2', title: 'Wow', value: '1,891' }, { color: '#5D2FD1', title: 'Happy', value: '1,029' }, { color: '#265D35', title: 'Average', value: '1,029' }, { color: '#282828', title: 'Poor', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_channels_used', class: 'col-md-4', title: 'Channels Used', data: [],
          label: [ { color: '#4DAAE2', title: 'Whatsapp', value: '1,891' }, { color: '#5D2FD1', title: 'In-app', value: '1,029' },
            { color: '#265D35', title: 'Web Page', value: '1,029' }, { color: '#B4304F', title: 'Telegram', value: '1,029' }, { color: '#282828', title: 'WeChat', value: '1,029' } ],
        },
        {
          type: 'doughnut', id: 'sarah_restaurants_type', class: 'col-md-4', title: 'Restaurants Type', data: [],
          label: [ { color: '#4DAAE2', title: 'Credit Card Required', value: '1,891' }, { color: '#282828', title: 'No Credit Card Required', value: '1,029' } ],
        },
      ],
    },
  ];

  public meridiem: any;
  public date: any;
  public time: any;

  constructor(private router: Router) {
    this.refreshTime();
  }
  refreshTime() {
    this.getDate();
  }
  getDate() {
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
    this.date = `${currentDay}/${currentMonth}/${currentYear}`;
    this.time = `${currentHour}:${currentMinute}:${currentSecond}`;
  }



}
