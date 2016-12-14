export class File{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    private _FullName : string;
    public get FullName() : string {
        return this._FullName;
    }
    public set FullName(v : string) {
        this._FullName = v;
    }
    
    private _Content : any;
    public get Content() : any {
        return this._Content;
    }
    public set Content(v : any) {
        this._Content = v;
    }

    constructor(name:string, path:string, content:any) {
        
    }
}