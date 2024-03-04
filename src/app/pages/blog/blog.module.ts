import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogListComponent } from './blog-list/blog-list.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogAddComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
