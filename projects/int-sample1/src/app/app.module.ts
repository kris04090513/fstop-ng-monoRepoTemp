import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentSample1Component } from './component/component-sample1/component-sample1.component';
import { ComponentSample2Component } from './component/component-sample2/component-sample2.component';
import { DirectiveSample1Directive } from './directive/directive-sample1.directive';
import { PipeSample1Pipe } from './pipe/pipe-sample1.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ComponentSample1Component,
    ComponentSample2Component,
    DirectiveSample1Directive,
    PipeSample1Pipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
