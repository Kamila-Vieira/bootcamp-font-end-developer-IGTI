import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';
import { TodoListService } from './todoList.service';

export const TEMA = new InjectionToken<string>('app.theme');

@NgModule({
  declarations: [
    AppComponent,
    C2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: TEMA, useValue: 'dark' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
