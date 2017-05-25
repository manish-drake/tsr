import { Injectable } from "@angular/core"
import { Observable } from 'Rxjs';
import { File, IWriteOptions } from '@ionic-native/file';
declare var cordova: any;

@Injectable()
export class FileFactory {
    constructor(
        private file: File
    ) {
    }

    dataDirectory() {
        return this.file.dataDirectory;
    }


    // static fileIndex: 
    getFile(fullName: string): Observable<any> {
        return Observable.fromPromise(this.file.readAsText(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value.toString());
    }

    writeOptions: IWriteOptions = { replace: true }

    writeFile(dirPath: string, fileName: string, content: any): Promise<any> {
        return this.file.writeFile(dirPath, fileName, content, this.writeOptions)
            .catch((error) => { console.log("error writting file: " + JSON.stringify(error)) })
    }

    getSubFolders(fullName: string): Observable<string[]> {

        return Observable.fromPromise(this.file.listDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(entries => entries.map(e => e.name));
    }

    createFolder(name: string, parentFullPath: string): Observable<string> {
        return Observable.fromPromise(this.file.createDir(parentFullPath, name, true))
            .map(value => value["nativeURL"]);
    }

    deleteFile(fullName: string): Observable<boolean> {
        return Observable.fromPromise(this.file.removeFile(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value["success"])
    }

    deleteFolder(fullName: string): Observable<boolean> {
        return Observable.fromPromise(this.file.removeDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value["success"])
    }

    getFiles(folderFullName: string): Observable<string[]> {
        return Observable.fromPromise(this.file.listDir(this.getFilePath(folderFullName), this.getFileName(folderFullName)))
            .map(entries => entries.map(e => e.name));
    }

    getFileName(Path) {
        return Path.substring(Path.lastIndexOf('/') + 1);
    }

    getFilePath(Path) {
        return Path.substring(0, Path.lastIndexOf("/"));
    }
    readfile(path: string, file: string): Promise<any> {
        return this.file.readAsText(path, file)
    }

}