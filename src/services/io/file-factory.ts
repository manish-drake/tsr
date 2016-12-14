import { Observable } from 'Rxjs';
import { File } from 'ionic-native';

declare var cordova: any;

export class FileFactory {
    constructor() {
    }
    // static fileIndex: 
    getFile(fullName: string): any {
        return true;
    }

    saveFile(fullPath: string, name: string, content: any) {
        File.createDir(cordova.file.dataDirectory, "rootFolder", true).then((success) => {
            // var fileLocation = cordova.file.dataDirectory + matrixName;
            // File.createFile(fileLocation, name + ".json", true).then(() => {
            //     File.writeFile(fileLocation, name + ".json", content, true)
            //         .then(function (success) {

            //         })

            // })
        })
    }
    getSubFolders(fullPath: string, name: string): Observable<string[]> {

        return Observable.fromPromise(File.listDir(fullPath, name))
            .map(entries => {
                return entries.map(e => e.name)
            });
    }

    createFolder(name: string, parentFullPath: string): string {
        var folderPath: string;
        File.createDir(parentFullPath, name, true).then((success) => {
            alert(success);
        }).catch(reason => {

        })
        return folderPath;
    }

    deleteFile(fullPath: string, name: string): boolean {

        return true;
    }

    deleteFolder(fullPath: string, name: string): boolean {
        return true;
    }

    getFiles(folderFullPath: string, name: string): Observable<string[]> {
        return Observable.fromPromise(File.listDir(folderFullPath, name))
            .map(entries => entries.map(e => e.name));
    }

}