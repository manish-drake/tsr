import { TestSection } from './testSection'

export class Group{
    
    private _Sections : TestSection[];
    public get Sections() : TestSection[] {
        if(!this._Sections)
            this._Sections = [];
        return this._Sections;
    }
    public set Sections(v : TestSection[]) {
        this._Sections = v;
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
}