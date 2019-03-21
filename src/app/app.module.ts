import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxReadableNumberModule} from './modules/ngx-readable-number/ngx-readable-number.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxReadableNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
