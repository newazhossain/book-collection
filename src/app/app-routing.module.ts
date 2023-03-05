import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
    {
        path: '',
        component  : LayoutComponent,
        children: [
            {path: 'syncfusion', loadChildren: () => import('./modules/syncfusion/syncfusion.module').then(m => m.SyncfusionModule)},
            {path: 'material', loadChildren: () => import('./modules/material/material.module').then(m => m.MaterialModule)},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
