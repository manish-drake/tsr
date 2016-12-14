import { Injectable } from '@angular/core'
import { File } from './File'
import { Folder } from './Folder'
import { FileFactory } from './file-factory'
import { Observable } from 'Rxjs'


@Injectable()
export class FileIOService {
    getFolder(fullName: string) {
        var folder = new Folder();
        var fileFactory = new FileFactory();
        // alert(JSON.stringify(fileFactory.getSubFolders("file:/storage/emulated/0", "DCIM")));
    }

    // getFile(fullName: string): Observable<File> {

    // }
}