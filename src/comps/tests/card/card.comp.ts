import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'test-card',
    templateUrl: 'card.comp.html'
})
export class TestCardComp {
    @ViewChild('mydiv') md: ElementRef
    @Input() test: any;

    /**
     *
     */
    constructor(private _renderer: Renderer, private _router: Router) {

    }

    private clicks = 0;
    doubleTapNavigation() {
        this.clicks++;
        if (this.clicks == 1) {
            setTimeout(() => {
                console.log(this.clicks);
                if (this.clicks == 2) {
                    this._router.navigate(['detail', this.test.name, this.test.parent])
                }
                this.clicks = 0;
            }, 500);

        }
    }
}