import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'zoho-admin';
  public data: any = [
    { "Sr. No": 1, "Name": "Taman", "Reporting Manager": "Satyam", "Status":"Active"},
    { "Sr. No": 2, "Name": "John", "Reporting Manager": "Alice", "Status":"InActive" },
    { "Sr. No": 3, "Name": "Jane", "Reporting Manager": "Bob", "Status":"Active" },
    { "Sr. No": 4, "Name": "Vishakha", "Reporting Manager": "Jayant", "Status":"Active" },
  ];
}
