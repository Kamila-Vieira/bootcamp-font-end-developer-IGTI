import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery-component',
  templateUrl: './galery-component.component.html',
  styleUrls: ['./galery-component.component.css'],
})
export class GaleryComponentComponent {
  @Input() titulo: string = '';
  @Input() fotos: string[] = [];
  currentImg: number = 0;
  numberToShow: number = 0;

  nextPicture() {
    this.currentImg++;
  }
  prevPicture() {
    this.currentImg--;
  }
  firstPicture() {
    this.currentImg = 0;
  }
  lastPicture() {
    this.currentImg = 4;
  }
}
