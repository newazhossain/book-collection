import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports  : [  
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [    
        NavigationComponent
    ]
})

export class NavigationModule {
    
}