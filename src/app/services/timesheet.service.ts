
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  private apiUrl = 'http://192.168.1.40:8000/aggregation/v1/timesheet/admin/get?page=1&limit=20';
  private getUserURL = 'http://192.168.1.32:8000/user/profile';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (): Promise<any> {
    return this.http
      .get<any>(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${ localStorage.getItem('token') }`,
        },
      })
      .toPromise();
  }




  getProfileData (): Observable<any> {
    // console.log('token from our variable: ', this.token);
    console.log('token from localstorage: ', localStorage.getItem('token'));
    return this.http.get<any>(this.getUserURL, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`,
      },
    });
  }

}
