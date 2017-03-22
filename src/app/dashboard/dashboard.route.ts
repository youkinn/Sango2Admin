import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './Dashboard.component';
import { EditComponent } from './edit/edit.component';

const routes: Route[] = [
    // {
    //     path: '',
    //     // component: DashboardComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: DashboardComponent
    //         },
    //         {
    //             path: 'edit',
    //             component: EditComponent,
    //             outlet: 'modal'
    //         }]
    // }
    {
        path: 'dashboard2',
        redirectTo: 'dashboard1'
    },
    {
        path: 'dashboard1',
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'edit',
                component: EditComponent,
                outlet: 'modal'
            }
        ]
    }
];

// export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
