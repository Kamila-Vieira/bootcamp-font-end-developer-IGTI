import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenatorExpensesComponent } from './senator-expenses/senator-expenses.component';
import { SenatorComponent } from './senator/senator.component';

const routes: Routes = [
  { path: 'senadores', component: SenatorComponent },
  { path: 'despesassenador/:id', component: SenatorExpensesComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
