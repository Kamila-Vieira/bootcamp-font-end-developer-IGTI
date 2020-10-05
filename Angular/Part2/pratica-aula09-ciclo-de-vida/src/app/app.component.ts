import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  ids: number[] = [];
  lastId: number = 0;
  label: string = '';

  delete(id: number) {
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.ids.push(this.lastId);
  }
}
