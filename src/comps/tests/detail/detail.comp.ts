import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'test-detail',
    templateUrl: 'detail.comp.html'
})
export class TestDetailComp{
    @Input() test: any;
    @Output() onNavigate = new EventEmitter<string>();

    @Input() index: any;
    @Input() tests: any;
    

    navigate(ev){
        this.onNavigate.emit(ev);
    }

    isRunnig:boolean = false;

    onRun(){
        this.isRunnig = !this.isRunnig;
    }
    
}