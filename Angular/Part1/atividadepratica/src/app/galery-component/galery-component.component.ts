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
  showCurrentPicture() {
    if (this.currentImg == 0) {
      return 1;
    } else if (this.currentImg == 1) {
      return 2;
    } else if (this.currentImg == 2) {
      return 3;
    } else if (this.currentImg == 3) {
      return 4;
    } else if (this.currentImg == 4) {
      return 5;
    } else {
      return;
    }
  }
}
