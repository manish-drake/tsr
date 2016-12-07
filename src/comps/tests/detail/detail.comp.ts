import { Component, Input } from '@angular/core';

@Component({
    selector: 'test-detail',
    templateUrl: 'detail.comp.html'
})
export class TestDetailComp{
    @Input() test: any;
    
}