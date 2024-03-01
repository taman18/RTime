import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
  VCJ9.eyJpZCI6IjY1ZTAxNTYwZTkxYjA3MzE
  wNzEyMWI2NCIsImlhdCI6MTcwOTE4NDM1M
  iwiZXhwIjoxNzExNzc2MzUyfQ.NjUw
  mBEygX2UJz7IK7TgdQorVrGluii0PFV9LJtE8XQ`;

  private apiUrl = 'http://192.168.1.32:8000/admin/users?searchTerm=';
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
