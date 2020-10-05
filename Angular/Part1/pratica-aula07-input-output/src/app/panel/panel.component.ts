import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  expanded = true;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.expanded = true;
  }

  contract() {
    this.expanded = false;
  }
}
