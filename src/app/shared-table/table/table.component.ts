import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent implements OnInit {
  constructor (private router: Router) {
    // console.log('hi');
  }
  @Input() data: any;
  @Input() userData: any;
  @Input() showButton:any;
  public heading: any;
  public keys: any;
  public button:boolean = false;
  ngOnInit () {
    this.heading = this.userData.thead;
    // console.log(this.heading);
    this.data = this.userData.tbody;
    // console.log(this.data);
    this.button = this.showButton;
    // console.log(this.button);
  }
  @Output() dataEmitter = new EventEmitter<any>();

  emitData () {
    const dataToSend = 'Hello, Parent!';
    this.dataEmitter.emit(dataToSend);
  }
  editModal () {
    const dataToSend = 'Hello, Parent!';
    this.dataEmitter.emit(dataToSend);
  }
  // deleteModal () {

  // }
  // blockModal () {

  // }
  showUser (name:any) {
    const userData = name;

    // Store the user data in local storage with a variable name 'userData'
    localStorage.setItem('userData', JSON.stringify(userData));
    // console.log(userData);
    this.router.navigate([ '/userbio' ]);
  }
}
