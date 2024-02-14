import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent implements OnInit{
  @Input() data:any;
  @Input() userData:any;
  public heading:any;
  public keys:any;
  constructor () {
  }
  ngOnInit () {
    this.heading=this.userData.thead;
    console.log(this.heading);
    this.data=this.userData.tbody;
    console.log(this.data);
  }
}
