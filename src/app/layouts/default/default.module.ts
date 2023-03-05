import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { NavigationModule } from '../navigation/navigation.module';
import { DefaultLayoutComponent } from './default.component';


@NgModule({
    declarations: [
        DefaultLayoutComponent
    ],
    imports     : [
        RouterModule,
        CommonModule,
        MatIconModule,
        HeaderModule,
        NavigationModule,
    ],
    exports     : [
        DefaultLayoutComponent
    ]
})
export class DefaultLayoutModule {}
