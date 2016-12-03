import { Component, Input } from '@angular/core';
import { TestCardComp } from '../card/card.comp'

@Component({
    selector: 'test-section',
    templateUrl: 'section.comp.html'
})
export class TestSectionComp{
    @Input()Section:any;

    convert(){
        
    }
}