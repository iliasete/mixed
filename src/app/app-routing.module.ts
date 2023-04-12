import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'pageA',
    loadComponent: () => import('./pages/page-a/page-a.component').then(m => m.PageAComponent)
  },
  {
    path: 'pageB',
    loadComponent: () => import('./pages/page-b/page-b.component').then(m => m.PageBComponent)
  },
  {
    path: 'pageC',
    loadComponent: () => import('./pages/page-c/page-c.component').then(m => m.PageCComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
