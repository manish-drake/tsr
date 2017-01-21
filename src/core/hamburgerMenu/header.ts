// import { Group } from './group'
export class Header{
    
    private _Name : Object;
    public get Name() : Object {
        return this._Name;
    }
    public set Name(v : Object) {
        this._Name = v;
    }
    
    private _Groups : Object[];
    public get Groups() : Object[] {
        return this._Groups;
    }
    public set Groups(v : Object[]) {
        this._Groups = v;
    }
    
    
}