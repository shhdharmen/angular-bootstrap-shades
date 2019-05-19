import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  opacities= ['1','2','3','4','5','6','7','8','9'];
}
