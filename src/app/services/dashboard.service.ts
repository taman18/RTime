import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // userUrl="http://localhost:8000/admin/totaluser";
  constructor (private http: HttpClient) {
    console.log('http');
  }

  getUsers (): Observable<User> {
    const token =
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc0YjU0ZmY4MjE2OTE4ZWI0ZTNl
      NyIsImlhdCI6MTcwODYwODM0MCwiZXhwIjoxNzExMjAwMzQwfQ.wEc8QQdDz6RkhjP0l_FOn4ldyT_DCxYNogVGIntbo50`;
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<User>('http://192.168.1.40:8000/admin/totaluser', { headers: head_obj });
    // return this.http.get<User>("http://192.168.1.42:6000/aggregation/v1/timesheet/admin/get",{headers:head_obj});
  }

  getFiveActiveUsers (): Observable<any> {
    const token =
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC
      I6IjY1ZDc0YjU0ZmY4MjE2OTE4ZWI0ZTNlNyIsImlhdCI6MTcwODYwODM0MCwiZXhwIjoxNzExMjAwMzQwfQ.wEc8QQdDz6RkhjP0l_FOn4ldyT_DCxYNogVGIntbo50`;
    const head_obj = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get<any>('http://192.168.1.40:8000/admin/recentusers', { headers: head_obj });
  }




}
