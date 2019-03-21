import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxReadableNumberComponent } from './ngx-readable-number.component';

@NgModule({
  declarations: [NgxReadableNumberComponent],
  exports: [NgxReadableNumberComponent],
  imports: [
    CommonModule
  ]
})
export class NgxReadableNumberModule { }
