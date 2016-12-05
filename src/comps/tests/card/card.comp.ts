import { Component, Input } from '@angular/core';

@Component({
    selector: 'test-card',
    templateUrl: 'card.comp.html'
})
export class TestCardComp{
    @Input()test:any;
    callConsole(row){
        console.log("From card:", row);
    }
    ngAfterViewInit(){
        
    }
}