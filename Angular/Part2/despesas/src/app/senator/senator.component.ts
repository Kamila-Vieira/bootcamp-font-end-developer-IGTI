import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css'],
})
export class SenatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showSenator() {
    'senadores/:id';
  }
}
