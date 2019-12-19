import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MainRouterModule } from './core/router/main-router.module';
import { RestApiService } from './core/http/api.service';
import { PayrollModule } from './modules/payroll/payroll.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PayrollModule,
    BrowserModule,
    HttpClientModule,
    MainRouterModule
  ],
  providers: [
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
