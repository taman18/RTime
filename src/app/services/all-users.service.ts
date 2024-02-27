import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllUsersService {

  private apiUrl = 'http://192.168.1.32:8000/admin/users?page=1&limit=20';
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
}
