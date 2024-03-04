import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule ),
  },
  {
    path: 'financial',
    loadChildren: () => import('./pages/financial/financial.module').then((m) => m.FinancialModule),
  },
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then((m) => m.ManageModule),
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
