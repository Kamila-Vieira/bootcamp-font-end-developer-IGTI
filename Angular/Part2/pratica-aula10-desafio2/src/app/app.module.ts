import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ConfigComponent } from './config/config.component';
import { TimerComponent } from './timer/timer.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
