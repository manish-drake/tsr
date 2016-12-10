import { Component, Input, AfterViewInit } from '@angular/core';


@Component({
    selector: 'test-section',
    templateUrl: 'section.comp.html'
})
export class TestSectionComp implements AfterViewInit{
    @Input()section:any;
    
    ngAfterViewInit(){
        
    }
}