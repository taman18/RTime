import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJp
  ZCI6IjY1ZDc0ZTU3ZmY4MjE2OTE4ZWI0ZTQyMyIsImlhdCI6M
  TcwODYwOTExMSwiZXhwIjoxNzExMjAxMTExfQ.mwxf6rMfvS
  3mVMpmKXvfBbpfTS3Iaps-Ho3DnjwQwp8`;


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
