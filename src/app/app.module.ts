import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoTiresComponent } from './no-tires/no-tires.component';
import { RacconCarComponent } from './raccon-car/raccon-car.component';
import { MethheadCarComponent } from './methhead-car/methhead-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NoTiresComponent,
    RacconCarComponent,
    MethheadCarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
