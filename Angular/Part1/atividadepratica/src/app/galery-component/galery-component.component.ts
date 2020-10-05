import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery-component',
  templateUrl: './galery-component.component.html',
  styleUrls: ['./galery-component.component.css'],
})
export class GaleryComponentComponent {
  @Input() titulo: string = '#BlackLivesMetter';

  @Input() fotos: string[] = [
    '../assets/img/judeus-samson-GgKY8sDpCD8-unsplash.jpg',
    '../assets/img/kalea-morgan--R3pWoWJmTY-unsplash.jpg',
    '../assets/img/kalea-morgan-8YD07wqgxuc-unsplash.jpg',
    '../assets/img/parker-johnson-bOzxlKTz7To-unsplash.jpg',
    '../assets/img/parker-johnson-M7Tw_7GK6HM-unsplash.jpg',
  ];
}
