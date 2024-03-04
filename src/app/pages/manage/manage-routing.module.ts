import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageComponent} from "./manage.component";
import {ManageListComponent} from "./manage-list/manage-list.component";
import {ManageEditComponent} from "./manage-edit/manage-edit.component";
import {ManageDetailComponent} from "./manage-detail/manage-detail.component";
import {ManageAddComponent} from "./manage-add/manage-add.component";

const routes: Routes = [
  {
  path: '',
  component: ManageComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: ManageListComponent
    },
    {
      path: 'edit',
      component: ManageEditComponent
    },
    {
      path: 'detail',
      component: ManageDetailComponent
    },
    {
      path: 'add',
      component: ManageAddComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
