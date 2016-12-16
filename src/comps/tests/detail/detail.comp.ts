import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'test-detail',
    templateUrl: 'detail.comp.html'
})
export class TestDetailComp{
    @Input() test: any;
    @Input() testindex: any;
    @Input() testscount: any;
    @Output() onNavigate = new EventEmitter<string>();

    navigate(ev){
        this.onNavigate.emit(ev);
    }
    
}