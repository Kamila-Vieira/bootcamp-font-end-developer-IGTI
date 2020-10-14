import { Component, OnInit } from '@angular/core';
import { Senator, SenatorsService } from '../senators.service';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css'],
})
export class SenatorComponent implements OnInit {
  constructor(private senatorService: SenatorsService) {}
  senators: Senator[] = [];
  ngOnInit(): void {
    this.senatorService.listSenators().subscribe((senators) => {
      this.senators = senators;
    });
  }
}
