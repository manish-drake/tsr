import { Component, Input } from '@angular/core';

@Component({
    selector: 'detail-main',
    templateUrl: 'detail-main.html'
})
export class DetailMainComp{
    @Input() test: any;

    constructor() {}
    
}