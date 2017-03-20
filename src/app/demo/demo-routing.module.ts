import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Demo Pages'
        },
        children: [
            {
                path: 'index',
                component: DemoComponent,
                data: {
                    title: 'Demo Page'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
