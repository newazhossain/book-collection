import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SyncfusionDashboardComponent } from './dashboard.component';



@NgModule({
    declarations: [
        SyncfusionDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SyncfusionDashboardComponent
    ]
})
export class SyncfusionDashboardModule { }
