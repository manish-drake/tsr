import { Injectable } from '@angular/core'

// import { File } from './File'
// import { Folder } from './Folder'
import { FileFactory } from './file-factory'
// import { Observable } from 'Rxjs'


@Injectable()
export class FileIOService {
    constructor(private fileFactory: FileFactory) {
    }
    getFolder(fullName: string) {
        // var folder = new Folder();
        this.fileFactory.writeFile("file:/storage/emulated/0/DCIM/rootFolder/File", "abc.xml", "ajaja");
    }

    // getFile(fullName: string): Observable<File> {

    // }
}