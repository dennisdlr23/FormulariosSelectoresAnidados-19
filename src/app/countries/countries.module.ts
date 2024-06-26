import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countires-routing.module';


import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class CountriesModule { }
