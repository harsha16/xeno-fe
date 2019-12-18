import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MainRouterModule } from './core/router/main-router.module';
import { PayrollComponent } from './modules/payroll/components/payroll.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
