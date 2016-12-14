import { File } from './file'

export class Folder{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }

    
    private _SubFolders : Folder[];
    public get SubFolders() : Folder[] {
        if(!this._SubFolders)
            this._SubFolders = [];
        return this._SubFolders;

    }
    public set SubFolders(v : Folder[]) {
        this._SubFolders = v;

    }
    
    
    private _Files : File[];
    public get Files() : File[] {
        if(!this._Files)
            this._Files = [];
        return this._Files;
    }
    public set Files(v : File[]) {
        this._Files = v;
    }
    
    private _FullName : string;
    public get FullName() : string {
        return this._FullName;
    }
    public set FullName(v : string) {
        this._FullName = v;
    }
    
}