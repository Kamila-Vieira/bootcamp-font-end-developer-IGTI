import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLBase = 'http://localhost:3000';

export interface Senator {
  id: number;
  nomeSenador: string;
}
export interface Expenses {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}
export interface SenatorExpenses {
  id: number;
  nomeSenador: string;
  despesas: Expenses[];
}

@Injectable({
  providedIn: 'root',
})
export class SenatorsService {
  constructor(private http: HttpClient) {}

  listSenators() {
    return this.http.get<Senator[]>(`${URLBase}/senadores`);
  }

  retrieveSenator(id: number) {
    return this.http.get<SenatorExpenses>(`${URLBase}/despesasSenadores/${id}`);
  }
}
