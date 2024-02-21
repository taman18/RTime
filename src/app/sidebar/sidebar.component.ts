import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ],
})
export class SidebarComponent {
  public check:boolean = true;
  toggleSidebar = false;


  toggleSidebarFn () {
    this.toggleSidebar = !this.toggleSidebar;
    console.log(this.toggleSidebar);
  }
}
