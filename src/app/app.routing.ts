import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'demo',
    component: SimpleLayoutComponent,
    data: {
      title: 'Demo'
    },
    children: [
      {
        path: '',
        loadChildren: './demo/demo.module#DemoModule',
      }
    ]
  },
  {
    path: 'account',
    component: SimpleLayoutComponent,
    data: {
      title: 'Account'
    },
    children: [
      {
        path: '',
        loadChildren: './account/account.module#AccountModule',
      }
    ]
  },
  {
    path: 'errors',
    component: SimpleLayoutComponent,
    data: {
      title: 'Errors'
    },
    children: [
      {
        path: '',
        loadChildren: './errors/errors.module#ErrorsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
