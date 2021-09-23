import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoTiresComponent } from './no-tires/no-tires.component';
import { RacconCarComponent } from './raccoon-car/raccon-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NoTiresComponent,
    RacconCarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
