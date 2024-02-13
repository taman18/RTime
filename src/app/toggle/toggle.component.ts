import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit{
   
  switchTheme = new FormControl(false);
  @HostBinding('class') className = ' ';

  darkClass = 'theme-dark';
  lightClass = 'theme-light';

  constructor(private overlay : OverlayContainer) {}
  ngOnInit(): void {

    this.switchTheme.valueChanges.subscribe((currentMode) => {
      this.className = currentMode ? this.darkClass : this.lightClass

      if(currentMode){
        this.overlay.getContainerElement().classList.add(this.darkClass)
      }
      else {
        this.overlay.getContainerElement().classList.remove(this.darkClass)
      }
    })
  }
}
