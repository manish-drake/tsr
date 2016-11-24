import { Injectable } from '@angular/core'
import { Test } from '../../core/tests/test'
import { Datum } from '../../core/tests/datum'
import { File } from '../io/file.service'

@Injectable()
export class Factory{
    
    /**
     *
     */
    constructor(private file: File) {

    }

    createTest(name: string): Test{
        var fileContent = this.file.getContents(name);
        var test = JSON.parse(fileContent);
        return test;
    }
}