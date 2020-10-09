import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SenatorListComponent } from './senator-list/senator-list.component';
import { SenatorItemComponent } from './senator-item/senator-item.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, SenatorListComponent, SenatorItemComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
