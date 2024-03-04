import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinancialComponent} from "./financial.component";
import {FinancialListComponent} from "./financial-list/financial-list.component";
import {FinancialEditComponent} from "./financial-edit/financial-edit.component";
import {FinancialDetailComponent} from "./financial-detail/financial-detail.component";
import {FinancialAddComponent} from "./financial-add/financial-add.component";

const routes: Routes = [
  {
  path: '',
  component: FinancialComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: FinancialListComponent
    },
    {
      path: 'edit',
      component: FinancialEditComponent
    },
    {
      path: 'detail/:id ',
      component: FinancialDetailComponent
    },
    {
      path: 'add',
      component: FinancialAddComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
