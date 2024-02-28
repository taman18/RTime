import * as XLSX from 'xlsx';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
})
export class TableComponent  {
  // timesheetService: any;
  constructor (
    private router: Router,
    private userdataservice: UserDataService,
  ) {
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
  searchQuery: string = '';
  public myData: any;
  public result: any;
  public error:boolean = true;
  @Output() dataEmitter = new EventEmitter<any>();
  @Output() ProfileClickEvent = new EventEmitter<any>();

  sendDataToParent (data: any) {
    if(!data)
    {
      // console.log('jaraha h')
      this.result = '';
    }
    //for email
    // console.log("------------------------",data);
    else if (data.includes('@')) {
      this.result = data.toLowerCase();
    }
    else {
      // for name
      this.result = data.split(' ');

      for (let i = 0; i < this.result.length; i++) {
        this.result[i] =
          this.result[i][0].toUpperCase() + this.result[i].slice(1);
      }
      this.result = this.result.join(' ');
      // console.log("-----------------",this.result);
    }
    this.userdataservice.getData(this.result).subscribe(
      (data: any) => {
        if (data.result.length === 0) {
          this.error = false;
          console.log('no data found');
        }
        else{
          this.error = true;
          this.sendMessage(data.result);
          console.log(data.result);
        }
      },
      (error) => {
        console.log(error);
      },
    );
  }
  @Output() messageEvent = new EventEmitter<object>();

  sendMessage (data:any) {
    this.messageEvent.emit(data);
  }

  showUser (name: any) {
    const userData = name.email;
    this.ProfileClickEvent.emit(name.email);
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
