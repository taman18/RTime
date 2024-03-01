import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  public blockUser:any;
  public status:any;
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
  VCJ9.eyJpZCI6IjY1ZTAxNTYwZTkxYjA3MzE
  wNzEyMWI2NCIsImlhdCI6MTcwOTE4NDM1M
  iwiZXhwIjoxNzExNzc2MzUyfQ.NjUw
  mBEygX2UJz7IK7TgdQorVrGluii0PFV9LJtE8XQ`;  private apiUrl = 'http://192.168.1.32:8000/admin//user-enable-disable';
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
