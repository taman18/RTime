import { Component } from '@angular/core';

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
}
