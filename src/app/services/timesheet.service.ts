
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6Ik
  pXVCJ9.eyJpZCI6IjY1ZDc
  0ZTU3ZmY4MjE2OTE4ZWI0ZTQyMyIsImlhdCI6MTcwODYwOTExMSwi
  ZXhwIjoxNzExMjAxMTExfQ.mwxf6rMfvS3mVMpmKXv
  fBbpfTS3Iaps-Ho3DnjwQwp8`;  private apiUrl = 'http://192.168.1.23:8000/aggregation/v1/timesheet/admin/get?page=1&limit=20';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (): Promise<any> {
    return this.http
      .get<any>(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${ this.token }`,
        },
      })
      .toPromise();
  }
}
