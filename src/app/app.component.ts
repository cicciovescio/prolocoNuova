import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'torre-di-mezzo-web';
  constructor() {
    setTheme('bs4'); // or 'bs4'
  } 
}
