import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Primary1Component } from './primary1/primary1.component';
import { Primary2Component } from './primary2/primary2.component';
import { Primary3Component } from './primary3/primary3.component';
import { Secondary1Component } from './secondary1/secondary1.component';
import { Secondary2Component } from './secondary2/secondary2.component';
import { Secondary3Component } from './secondary3/secondary3.component';
import { Secondary4Component } from './secondary4/secondary4.component';
import { Secondary5Component } from './secondary5/secondary5.component';
import { Secondary6Component } from './secondary6/secondary6.component';
import { Secondary7Component } from './secondary7/secondary7.component';
import { Secondary8Component } from './secondary8/secondary8.component';
import { Secondary9Component } from './secondary9/secondary9.component';
import { Side1Component } from './side1/side1.component';
import { Side2Component } from './side2/side2.component';
import { Side3Component } from './side3/side3.component';

@NgModule({
  declarations: [
    AppComponent,
    Primary1Component,
    Primary2Component,
    Primary3Component,
    Secondary1Component,
    Secondary2Component,
    Secondary3Component,
    Secondary4Component,
    Secondary5Component,
    Secondary6Component,
    Secondary7Component,
    Secondary8Component,
    Secondary9Component,
    Side1Component,
    Side2Component,
    Side3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
