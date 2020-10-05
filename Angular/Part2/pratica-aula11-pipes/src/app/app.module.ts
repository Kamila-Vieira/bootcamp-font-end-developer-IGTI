import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepPipe } from './cep.pipe';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent, CepPipe, CpfPipe, JoinStringsPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
