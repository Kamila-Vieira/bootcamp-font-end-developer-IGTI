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
  prox() {
    this.currentImg++;
  }
  ante() {
    this.currentImg--;
  }
  primeira() {
    this.currentImg = 0;
  }
  ultima() {
    this.currentImg = 4;
  }
  disabledButton() {
    this.currentImg - 1;
  }
}
