// import { TestSection } from './testSection';

import { Test } from './test';

export class Group{

    constructor(){}
    
    // private _Sections : TestSection[];
    // public get Sections() : TestSection[] {
    //     if(!this._Sections)
    //         this._Sections = [];
    //     return this._Sections;
    // }
    // public set Sections(v : TestSection[]) {
    //     this._Sections = v;
    // }

    private _Test : Test[];
    public get Test() : Test[] {
        if(!this._Test)
            this._Test = [];
        return this._Test;
    }
    public set Test(v : Test[]) {
        this._Test = v;
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
}