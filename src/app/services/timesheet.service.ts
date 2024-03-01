
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  public pageNum:number = 1;
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
  VCJ9.eyJpZCI6IjY1ZTAxNTYwZTkxYjA3MzE
  wNzEyMWI2NCIsImlhdCI6MTcwOTE4NDM1M
  iwiZXhwIjoxNzExNzc2MzUyfQ.NjUw
  mBEygX2UJz7IK7TgdQorVrGluii0PFV9LJtE8XQ`;
  private apiUrl = `http://192.168.1.32:8000/aggregation/v1/timesheet/admin/get?page=${ this.pageNum }&limit=20`;
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
