import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubSectionComp } from '../sub-section/subSection.comp';


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
    constructor() {
        
    }

    onClick(){
        console.log("Section click called");
    }

    onItemSelected(e){
        this.SelectedItem = e.name;
        console.log(this.SelectedItem);
        
        
        this.ItemSelectionChanged.emit({
            newItem: this.SelectedItem,
            parent: this.Name
        });
        
    }
}