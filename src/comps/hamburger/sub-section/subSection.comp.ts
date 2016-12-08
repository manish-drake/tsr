import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sub-section-comp',
    templateUrl: 'subSection.comp.html'
})
export class SubSectionComp{
    @Input()Name:string;
    @Input()Count:number;
    @Output()Selected = new EventEmitter();

    onClick(){
        this.Selected.emit({
            name: this.Name
        });
    }
}