import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SenatorExpenses,
  SenatorsService,
  Expenses,
} from '../senators.service';

@Component({
  selector: 'app-senator-expenses',
  templateUrl: './senator-expenses.component.html',
  styleUrls: ['./senator-expenses.component.css'],
})
export class SenatorExpensesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private senatorService: SenatorsService
  ) {}

  senatorName: string = '';
  senatorExpanses: SenatorExpenses[] = [];
  expenses: Expenses[] = [];
  expensesPerType: { tipo: number; total: number }[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = parseInt(paramMap.get('id'));
      this.senatorService.retrieveSenator(id).subscribe((senator) => {
        this.expenses = senator.despesas;
        this.senatorName = senator.nomeSenador;
        this.expensesPerType = totalValuePerTypeOfExpense(this.expenses);
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
  countTotalExpensesPerSenator(): number {
    return this.expensesPerType.reduce(
      (expense, next) => expense + next.total,
      0
    );
  }
}

function totalValuePerTypeOfExpense(expenses: Expenses[]) {
  let result: { tipo: number; total: number }[] = [];
  for (let i = 1; i <= 7; i++) {
    const totalValue = expenses
      .filter((despesa) => despesa.tipo === i)
      .reduce((total, despesa) => total + despesa.valor, 0);
    result[i - 1] = { tipo: i, total: totalValue };
  }
  return result;
}
