import * as XLSX from 'xlsx';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent implements OnInit, OnChanges {
  // timesheetService: any;
  constructor (private router: Router) {
    // console.log('hi');
  }
  @Input() data: any;
  @Input() userData: any;
  @Input() showButton: any;
  public heading: any;
  public keys: any;
  public button: boolean = false;
  fileName = 'ExcelSheet.xlsx';
  public searchData: any;
  p: number = 1;
  users: any;
  firstName: any;

  ngOnInit () {
    console.log();
    // console.log(this.button);
  }

  ngOnChanges () {
    console.log('-------------', this.userData);

    // this.users = this.userData;
    // this.heading = this.userData.thead;
    // // console.log(this.heading);
    // this.data = this.userData.tbody;
    // // console.log(this.data);
    // this.button = this.showButton;
  }
  @Output() dataEmitter = new EventEmitter<any>();
  @Output() ProfileClickEvent = new EventEmitter<any>();
  // emitData () {
  //   const dataToSend = 'Hello, Parent!';
  //   this.dataEmitter.emit(dataToSend);
  // }
  // editModal () {
  //   const dataToSend = 'Hello, Parent!';
  //   this.dataEmitter.emit(dataToSend);
  // }
  // deleteModal () {

  // }
  // blockModal () {

  // }

  showUser (name: any) {
    const userData = name.email;
    // console.log(userData);

    // localStorage.setItem('userData', JSON.stringify(userData.email));
    // console.log(userData);
    this.ProfileClickEvent.emit(name.email);
  }
  getData () {
    // this.userdataService.getData(this.userData).subscribe(
    //   (response: any) => {
    //     // console.log('taman');
    //     this.userData = response;
    //     console.log(this.userData);
    //   },
    //   (error:any) => {
    //     // console.log('taman');
    //     console.error('Error fetching data', error);
    //     // console.log('hi');
    //   },
    // );
  }

  //excel logic
  exportexcel () {
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  key: string = '';
  reverse: boolean = false;
  sort (key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
