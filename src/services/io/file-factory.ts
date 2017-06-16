import { Injectable } from "@angular/core"
import { Platform } from 'ionic-angular'
import { Observable } from 'Rxjs'
import { File, IWriteOptions } from '@ionic-native/file'

declare var cordova: any;

@Injectable()
export class FileFactory {
    constructor(
        private file: File,
        private platform: Platform) {
    }

    checkFile(dirpath: string, fileName: string): Promise<boolean> {
        return this.file.checkFile(dirpath, fileName)
    }

    writeOptions: IWriteOptions = { replace: true }

    writeFile(dirPath: string, fileName: string, content: any): Promise<any> {
        return this.file.writeFile(dirPath, fileName, content, this.writeOptions)
            .catch((error) => { console.log("error writting file: " + JSON.stringify(error)) })
    }

    copyFile(filePath, fileName, newFilePath, newFileName): Observable<any> {
        return Observable.fromPromise(this.file.copyFile(filePath, fileName, newFilePath, newFileName))
            .map(x => x)
    }

    removeFile(path, fileName): Promise<any> {
        return this.file.removeFile(path, fileName);
    }

    readAsText(path: string, file: string): Promise<any> {
        return this.file.readAsText(path, file)
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


    getSubFolders(fullName: string): Observable<string[]> {
        return Observable.fromPromise(this.file.listDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(entries => entries.map(e => e.name));
    }

    createFolder(name: string, parentFullPath: string): Observable<string> {
        return Observable.fromPromise(this.file.createDir(parentFullPath, name, true))
            .map(value => value["nativeURL"]);
    }

    deleteFolder(fullName: string): Observable<boolean> {
        return Observable.fromPromise(this.file.removeDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value["success"])
    }

}