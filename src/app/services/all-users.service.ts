import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllUsersService {

  public token =
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc0ZTU3ZmY4Mj
    E2OTE4ZWI0ZTQyMyIsImlhdCI6MTcwODYwOTExMSwiZXhwIjoxNzExMjAx
    MTExfQ.mwxf6rMfvS3mVMpmKXvfBbpfTS3Iaps-Ho3DnjwQwp8`;

  private apiUrl = 'http://192.168.1.23:8000/admin/users?page=1&limit=2';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${ this.token }`,
      },
    });

  }
}
