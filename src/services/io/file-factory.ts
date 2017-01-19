import { Observable } from 'Rxjs';
import { File, DirectoryEntry } from 'ionic-native';
declare var cordova: any;

export class FileFactory {
    constructor() {
    }
    // static fileIndex: 
    getFile(fullName: string): Observable<any> {
        return Observable.fromPromise(File.readAsText(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value.toString());
    }

    saveFile(fullPath: string, name: string, content: any) {
        var parentFullPath: string = "file:/storage/emulated/0";
        var filePath = fullPath.slice(25);

        this.createFolderRx(filePath, parentFullPath).then((success) => {
            File.createFile(fullPath, name, true).then((success) => {
                alert("file: " + JSON.stringify(success));
                File.writeFile(fullPath, name, content, true).then((success) => {
                    alert("save: " + JSON.stringify(success));
                })
            })
        });
    }

    getSubFolders(fullName: string): Observable<string[]> {

        return Observable.fromPromise(File.listDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(entries => entries.map(e => e.name));
    }

    createFolder(name: string, parentFullPath: string): Observable<string> {
        return Observable.fromPromise(File.createDir(parentFullPath, name, true))
            .map(value => value["nativeURL"]);
    }

    createFolderRx(fullPath: string/*DCIM/rootFolder/File/*/, parentFullPath: string/*file:/storage/emulated/0*/): Promise<DirectoryEntry> {
        var urlParts = fullPath.split("/");
        if (urlParts.length > 0) {
            var name = urlParts[0];
            if (!parentFullPath)
                parentFullPath = "file:/storage/emulated/0";
            return File.createDir(parentFullPath, name, true).then(success => {
                parentFullPath += "/" + name;
                if (urlParts.length >= 2) {
                    fullPath = urlParts.slice(1).join("/");
                } else {
                    return success["nativeURL"];
                }
                return this.createFolderRx(fullPath, parentFullPath);
            });
        }
    }

    deleteFile(fullName: string): Observable<boolean> {
        return Observable.fromPromise(File.removeFile(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value["success"])
    }

    deleteFolder(fullName: string): Observable<boolean> {
        return Observable.fromPromise(File.removeDir(this.getFilePath(fullName), this.getFileName(fullName)))
            .map(value => value["success"])
    }

    getFiles(folderFullName: string): Observable<string[]> {
        return Observable.fromPromise(File.listDir(this.getFilePath(folderFullName), this.getFileName(folderFullName)))
            .map(entries => entries.map(e => e.name));
    }

    getFileName(Path) {
        return Path.substring(Path.lastIndexOf('/') + 1);
    }

    getFilePath(Path) {
        return Path.substring(0, Path.lastIndexOf("/"));
    }
    readfile(path, fileName): Observable<any> {
        return Observable.fromPromise(File.readAsText(path, fileName))
            .map(x => x.toString());
    }

}