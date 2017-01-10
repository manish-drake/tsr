import { Injectable } from '@angular/core'
import { Dictionary } from '../../common/dictionary'
import { Observable } from 'Rxjs'
import { Http } from '@angular/http';

@Injectable()
export class Master {

    constructor(private http: Http) {

    }

    scanTest(): Observable<any> {
        console.log('posting');
        return this.http.post('http://claganga.homeip.net/cgi-bin/UATCGIServer',
            {
                "request":
                {
                    "version": 2, "message": 8196, "params":
                    {

                    }
                }
            })
            .map((res) => {
                console.log(res);

                return res.json();
            })
    }

    runTest(testName: string, args: Dictionary<string, string>): string {
        return "";
    }
}