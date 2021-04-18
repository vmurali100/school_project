import { SampleModule } from './../sample/sample.module';
import { MainRoutingModule } from './main-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SampleModule,
    MainRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
