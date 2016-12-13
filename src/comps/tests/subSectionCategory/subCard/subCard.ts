import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sub-test-card',
    templateUrl: 'subCard.html'
})
export class SubTestCardComp {
    @ViewChild('mydiv') md: ElementRef
    @Input() test: any;

    /**
     *
     */
    constructor(private _renderer: Renderer, private _router: Router) {

    }
    public step: string;
    private clicks = 0;
    doubleTapNavigation() {
        this.clicks++;
        if (this.clicks == 1) {
            setTimeout(() => {
                console.log(this.clicks);
                if (this.clicks == 1) {
                    this.step = this.test.name;
                }
                if (this.clicks == 2) {
                    this._router.navigate(['detail', this.test.name, this.test.parent])
                }
                this.clicks = 0;
            }, 500);

        }
    }
}