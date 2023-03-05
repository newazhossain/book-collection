import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialDashboardComponent } from './dashboard.component';



@NgModule({
    declarations: [
        MaterialDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MaterialDashboardComponent
    ]
})
export class MaterialDashboardModule { }
