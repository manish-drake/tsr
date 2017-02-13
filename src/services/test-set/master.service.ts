import { Injectable } from '@angular/core'
import { Dictionary } from '../../common/dictionary'
import { Observable, BehaviorSubject } from 'Rxjs'
import { Http } from '@angular/http';
import { LocalStorage } from '../../services/storage/local-storage';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';

@Injectable()
export class MasterService {

    routeName: string;

    constructor(
        private http: Http,
        private _localStorage: LocalStorage,
        private broker: BrokerFactoryService,
    ) { }

    private testInContext = new BehaviorSubject<any>(undefined);
    getTestInContext() {
        return this.testInContext.asObservable();
    }
    setTestInContext(e) {
        this.testInContext.next(e);
        if (e == undefined) this.setFooterResultStatus(undefined);
    }

    private footerResultStatus = new BehaviorSubject<any>(undefined);
    getFooterResultStatus() {
        return this.footerResultStatus.asObservable();
    }
    setFooterResultStatus(e) {
        this.footerResultStatus.next(e);
    }

    onStartSwitch(e) {
        if (e.isStartItem == false || e.isStartItem == undefined) {
            e.isStartItem = true;
            this.addToStart(e.name);
        }
        else {
            e.isStartItem = false;
            this.removeFromStart(e.name);
        }
    }

    addToStart(name) {
        var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
        var favColl = [];
        if (startItems == null) {
            favColl.push(name);
            this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl))
        }
        else {
            favColl = JSON.parse(startItems)
            favColl.push(name);
            this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));
        }
        if (this.routeName == 'Start') {
            this.broker.generateTestGroups(this.routeName);
        }
    }

    removeFromStart(testgroupname) {
        var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
        if (startItems != null) {
            var favColl = JSON.parse(startItems);
            favColl.forEach((element, index) => {
                if (testgroupname == element) {
                    favColl.splice(index, 1);
                }
            });
            this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));

            if (this.routeName == 'Start') {
                this.broker.generateTestGroups(this.routeName);
            }
        }
    }

    scanTest(): Observable<any> {
        console.log('posting');

        // return this.http.post('http://claganga.homeip.net/cgi-bin/UATCGIServer',
        // {
        //     "request":
        //     {
        //         "version": 2, "message": 8196, "params":
        //         {
        //         }
        //     }
        // })
        // .map((res) => {
        //     return res.json();
        // })

        //Return data from assets
        return this.http.get('assets/jsonfiles/data.json')
            .map((res) => res.json())
    }

    runTest(testName: string, args: Dictionary<string, string>): string {
        return "";
    }


}