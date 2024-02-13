import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data:any;
  public heading:any;
  public getObject(obj: any): string[] {
      return Object.keys(obj);
  }
  constructor(){ 
  }
  ngOnInit(){
    this.heading=this.data[0];
    this.heading=Object.keys(this.data[0]);
    // console.log(this.heading);
    console.log(this.data);

    // console.log(Object.keys(this.data));
}
}