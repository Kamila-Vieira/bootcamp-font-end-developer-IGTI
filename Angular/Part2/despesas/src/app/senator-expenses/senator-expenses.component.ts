import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SenatorExpanses,
  SenatorsService,
  Expanses,
} from '../senators.service';

@Component({
  selector: 'app-senator-expenses',
  templateUrl: './senator-expenses.component.html',
  styleUrls: ['./senator-expenses.component.css'],
})
export class SenatorExpensesComponent implements OnInit {
  despesa: string = '';
  valor: number = 1234.5678;

  constructor(
    private route: ActivatedRoute,
    private senatorService: SenatorsService
  ) {}

  senatorName: string = '';
  senatorExpanses: SenatorExpanses[] = [];
  expanses: Expanses[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = parseInt(paramMap.get('id'));
      this.senatorService.retrieveSenator(id).subscribe((senator) => {
        this.expanses = senator.despesas;
        this.senatorName = senator.nomeSenador;
      });
    });
  }

  expensesTypes(type: number) {
    if (type === 1) {
      return 'Aluguel de imóveis e despesas concernentes a eles';
    } else if (type === 2) {
      return 'Divulgação da atividade parlamentar';
    } else if (type === 3) {
      return 'Aquisição de material de consumo para uso no escritório';
    } else if (type === 4) {
      return 'Passagens aéreas, aquáticas e terrestres nacionais';
    } else if (type === 5) {
      return 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços';
    } else if (type === 6) {
      return 'Locomoção, hospedagem, alimentação e combustíveis';
    } else if (type === 7) {
      return 'Serviços de Segurança Privada';
    } else {
      return '';
    }
  }

  totalValuePerTypeOfExpense() {
    /* for (let i = 1; i <= 7; i++) {
      const total = expanses
        .filter((despesa) => despesa.tipo === i)
        .reduce((total, despesa) => total + despesa.valor, 0);
      return total;
    } */
    this.expanses.forEach((ex) => {
      if (ex.tipo === ex.tipo) {
      }
    });
  }

  countTotalExpensesPerSenator() {}
}
