import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollComponent } from 'src/app/modules/payroll/components/payroll.component';

const routes: Routes = [
  {
    path: '',
    component: PayrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouterModule { }
