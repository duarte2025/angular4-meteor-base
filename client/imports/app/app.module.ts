import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DataBinding } from './data-binding/data-binding.component';
@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    MyFirstComponent,
    DataBinding,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
