import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManageAddComponent } from './manage-add/manage-add.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageDetailComponent } from './manage-detail/manage-detail.component';


@NgModule({
  declarations: [
    ManageComponent,
    ManageAddComponent,
    ManageEditComponent,
    ManageListComponent,
    ManageDetailComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
