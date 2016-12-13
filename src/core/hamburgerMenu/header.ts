import { Group } from './group'
export class Header{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    private _Groups : string[];
    public get Groups() : string[] {
        return this._Groups;
    }
    public set Groups(v : string[]) {
        this._Groups = v;
    }
    
    
}