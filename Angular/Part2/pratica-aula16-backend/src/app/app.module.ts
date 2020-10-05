import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localePt);

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
