import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/404/404.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

const routes: Routes = [
  { 
    path: '',
    component: SiteLayoutComponent,
    loadChildren: './views/tdm-op/tdm-op.module#TdmOpModule'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
