import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'test-card',
    templateUrl: 'card.comp.html'
})
export class TestCardComp{
    @ViewChild('mydiv') md: ElementRef
    @Input()test:any;

    /**
     *
     */
    constructor(private _renderer: Renderer, private _router: Router) {
        
    }

    ngAfterViewInit(){
        this._renderer.listen(this.md.nativeElement, 'dblclick', ()=>{
            this._router.navigate(['detail', this.test.name])
        })
    }
}