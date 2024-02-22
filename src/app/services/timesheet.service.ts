
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  public email = 'nitesh2@relinns.com';
  private apiUrl = 'http://192.168.1.40:8000/admin/users';
  constructor (private http: HttpClient) {
    //comment
  }
  getData (): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        Authorization: 'Bearer ',
      },
    });
  }

  // getData() {
  //   fetch('http://192.168.1.42:3000/aggregation/v1/timesheet/admin/get', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(result => {
  //     console.log(result);
  //     return result;
  //   })
  //   .catch(console.log);
  // }
}
