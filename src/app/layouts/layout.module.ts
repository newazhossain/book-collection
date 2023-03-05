import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DefaultLayoutModule } from './default/default.module';

const layoutModules = [
    DefaultLayoutModule
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        ...layoutModules
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule { }
