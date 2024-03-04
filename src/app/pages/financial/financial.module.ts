import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { FinancialAddComponent } from './financial-add/financial-add.component';
import { FinancialEditComponent } from './financial-edit/financial-edit.component';
import { FinancialListComponent } from './financial-list/financial-list.component';
import { FinancialDetailComponent } from './financial-detail/financial-detail.component';


@NgModule({
  declarations: [
    FinancialComponent,
    FinancialAddComponent,
    FinancialEditComponent,
    FinancialListComponent,
    FinancialDetailComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
