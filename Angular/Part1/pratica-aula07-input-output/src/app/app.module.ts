import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
