import { Component, Input } from '@angular/core';

@Component({
    selector: 'detail-default',
    templateUrl: 'detail-default.html'
})
export class DetailDefaultComp{
    @Input() test: any;

    constructor() {}
    
}