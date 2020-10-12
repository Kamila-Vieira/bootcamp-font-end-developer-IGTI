import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-senator-expenses',
  templateUrl: './senator-expenses.component.html',
  styleUrls: ['./senator-expenses.component.css'],
})
export class SenatorExpensesComponent implements OnInit {
  despesa: string = 'Aluguel';
  valor: number = 123.45;
  constructor() {}

  ngOnInit(): void {}

  countTotalExpensesPerSenator(id) {}
}
