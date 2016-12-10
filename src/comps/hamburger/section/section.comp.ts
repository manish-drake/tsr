import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'section-comp',
    templateUrl: 'section.comp.html'
})
export class SectionComp{
    @Input()Name:string;
    @Input()SubSections:any[] = [];
    @Output()ItemSelectionChanged = new EventEmitter();
    
    SelectedItem:any;

    public
    constructor() { }

    onClick(){
        
    }

    onItemSelected(e){
        this.SelectedItem = e.name;
        this.ItemSelectionChanged.emit({
            newItem: this.SelectedItem,
            parent: this.Name
        });
        
    }
}