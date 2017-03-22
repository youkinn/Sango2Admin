import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'dashboard3', pathMatch: 'full' },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'Home' },
    children: [{ loadChildren: './dashboard/dashboard.module#DashboardModule', path: '' }]
  },
  {
    path: 'demo',
    component: SimpleLayoutComponent,
    data: { title: 'Demo' },
    children: [{ loadChildren: './demo/demo.module#DemoModule', path: '' }]
  },
  {
    path: 'account',
    component: SimpleLayoutComponent,
    data: { title: 'Account' },
    children: [{ loadChildren: './account/account.module#AccountModule', path: '' }]
  },
  {
    path: 'errors',
    component: SimpleLayoutComponent,
    data: { title: 'Errors' },
    children: [{ loadChildren: './errors/errors.module#ErrorsModule', path: '' }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
