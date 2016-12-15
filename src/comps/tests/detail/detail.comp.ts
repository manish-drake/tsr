import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'test-detail',
    templateUrl: 'detail.comp.html'
})
export class TestDetailComp{
    @Input() test: any;
    @Output() onNavigate = new EventEmitter<string>();
    
}