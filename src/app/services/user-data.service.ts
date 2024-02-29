import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public token = `eyJhbGciOiJIUzI1NiIsInR5
  cCI6IkpXVCJ9.eyJpZCI6IjY1ZTAxNTYwZTk
  xYjA3MzEwNzEyMWI2NCIsImlhdCI6MTcwOTE
  4NDM1MiwiZXhwIjoxNzExNzc2MzUyfQ.Nj
  UwmBEygX2UJz7IK7TgdQorVrGluii0PFV9LJtE8XQ`;

  private apiUrl = 'http://192.168.1.40:8000/admin/users?searchTerm=';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (search:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + search, {
      headers: {
        Authorization: `Bearer ${ this.token }`,
      },
    });
  }
}
