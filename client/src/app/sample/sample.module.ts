import { SampleComponent } from './sample.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule
  ],
  exports:[SampleComponent]
})
export class SampleModule { }
