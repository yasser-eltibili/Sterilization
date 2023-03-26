import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'primary1', component: Primary1Component },
  { path: 'primary2', component: Primary2Component },
  { path: 'primary3', component: Primary3Component },
  { path: 'secondary1', component: Secondary1Component },
  { path: 'secondary2', component: Secondary2Component },
  { path: 'secondary3', component: Secondary3Component },
  { path: 'secondary4', component: Secondary4Component },
  { path: 'secondary5', component: Secondary5Component },
  { path: 'secondary6', component: Secondary6Component },
  { path: 'secondary7', component: Secondary7Component },
  { path: 'secondary8', component: Secondary8Component },
  { path: 'secondary9', component: Secondary9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
