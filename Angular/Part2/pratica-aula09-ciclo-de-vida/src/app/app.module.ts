import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RefreshComponent } from './refresh/refresh.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    RefreshComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
