import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pratica-aula15';

  constructor(private router: Router) {

  }

  goToPage2() {
    this.router.navigate(['page2', '3']);
  }

}
