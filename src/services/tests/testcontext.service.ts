import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'Rxjs'

@Injectable()
export class TestContextService {

    constructor() { }

    currentMenu: string;

    private testInContext = new BehaviorSubject<any>(undefined);
    getTestInContext() {
        return this.testInContext.asObservable();
    }
    setTestInContext(e) {
        this.testInContext.next(e);
    }
}