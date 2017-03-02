// import { TestSection } from './testSection';

import { Test } from './test';

export class TestGroup{

    constructor(){}

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