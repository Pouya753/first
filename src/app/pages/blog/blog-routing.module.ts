import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogComponent} from "./blog.component";
import {BlogAddComponent} from "./blog-add/blog-add.component";
import {BlogEditComponent} from "./blog-edit/blog-edit.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BlogListComponent
      },
      {
        path: 'edit',
        component: BlogEditComponent
      },
      {
        path: 'detail',
        component: BlogDetailComponent
      },
      {
        path: 'add',
        component: BlogAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
