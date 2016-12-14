import { Injectable } from '@angular/core'
import { File } from './File'
import { Folder } from './Folder'
import{FileFactory} from './file-factory'


@Injectable()
export class FileIOService {
    getFolder(fullName:string): Folder{

        var folder=new Folder();
        var fileFactory=new FileFactory();
        alert(fileFactory.getSubFolders("file:/storage/emulated/0","DCIM"));
        return folder;
        
    }
    // getFile(fullName:string):File{
        
    // }
}