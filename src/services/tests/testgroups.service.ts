import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'Rxjs';
import { Factory } from '../../services/objects/factory.service';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';

@Injectable()
export class TestGroupsService {

    constructor(
        private _objectService: Factory,
        private _svcBroker: BrokerFactoryService
    ) { }

    private testgroups = new BehaviorSubject<any[]>([]);

    getTestgroups() {
        return this.testgroups.asObservable();
    }
    setTestgroups(e) {
        this.testgroups.next(e);
    }

    generateTestGroups(headername) {
        var testGroupsData = this._objectService.createTestGroupsData(headername);
        this.setTestgroups(this._svcBroker.createTestGroups(testGroupsData));
    }
}