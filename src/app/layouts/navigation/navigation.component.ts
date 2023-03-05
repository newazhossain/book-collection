import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { filter, ReplaySubject, Subject, takeUntil, tap } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

export interface NavigationItem {
    title?: string;
    subtitle?: string;
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    link?: string;
}


@Component({
    selector        : 'app-navigation',
    templateUrl     : './navigation.component.html',
    styleUrls       : ['./navigation.component.scss'],
    encapsulation   : ViewEncapsulation.None,
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit, OnDestroy {
    private _unsubscribeAll$: Subject<any> = new Subject<any>();

    navigation!: NavigationItem[];

    constructor(
        private _changeDetectorRef: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.navigation = [
            {
                title: 'Syncfusions',
                link : '/syncfusion'
            },
            {
                title: 'Materials',
                link : '/material'
            }
        ];
    }
    ngOnDestroy(){

        this._unsubscribeAll$.next(null);
        this._unsubscribeAll$.complete();
    }
}