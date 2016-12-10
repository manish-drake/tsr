import { Injectable } from '@angular/core'
import { Dictionary } from '../../common/dictionary'

@Injectable()
export class Master{
    
    constructor() {

    }

    runTest(testName: string, args:Dictionary<string, string>): string{
        return "";
    }
}