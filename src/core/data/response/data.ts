import { Results } from './Results';

export class Data {

    private ___type: string;
    public get __type(): string {
        return this.___type;
    }
    public set __type(v: string) {
        this.___type = v;
    }

    private _results: Results[];
    public get results(): Results[] {
        return this._results;
    }
    public set results(v: Results[]) {
        this._results = v;
    }
}