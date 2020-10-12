import { Component, OnInit } from '@angular/core';
import { Senator, SenatorExpanses, SenatorsService } from '../senators.service';

@Component({
  selector: 'app-senator-expenses',
  templateUrl: './senator-expenses.component.html',
  styleUrls: ['./senator-expenses.component.css'],
})
export class SenatorExpensesComponent implements OnInit {
  constructor(private senatorService: SenatorsService) {}

  senatorExpanses: SenatorExpanses[] = [];
  senator: Senator[] = [];

  ngOnInit(): void {
    this.senatorService.retrieveSenator(6).subscribe((senatorExpanses) => {
      let test = this.senatorExpanses.push(senatorExpanses);
      return console.log(test);
    });
  }

  retrieveSenator() {}

  countTotalExpensesPerSenator(id) {}
}
