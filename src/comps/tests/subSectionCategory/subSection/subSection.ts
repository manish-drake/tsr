import { Component,Input } from '@angular/core';

@Component({
    templateUrl: 'subSection.html'
})

export class SubSectionComp {

    @Input() subSection: any;
    constructor() {

    }
}