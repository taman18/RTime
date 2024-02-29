import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  public blockUser:any;
  public status:any;
  public token = `eyJhbGciOiJIUzI1NiIsInR5
  cCI6IkpXVCJ9.eyJpZCI6IjY1ZTAxNTYwZTk
  xYjA3MzEwNzEyMWI2NCIsImlhdCI6MTcwOTE
  4NDM1MiwiZXhwIjoxNzExNzc2MzUyfQ.Nj
  UwmBEygX2UJz7IK7TgdQorVrGluii0PFV9LJtE8XQ`;  private apiUrl = 'http://192.168.1.40:8000/admin//user-enable-disable';
  constructor (private http: HttpClient) {
    // console.log('hi');
  }
  getData (email:string, status:boolean): Promise<any> {
    const requestData = { email, status };
    return this.http
      .put<any>(this.apiUrl, requestData, {
        headers: {
          Authorization: `Bearer ${ this.token }`,
        },
      })
      .toPromise();
  }
}
