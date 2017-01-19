export class Params {

    private _target: number[];
    public get target(): number[] {
        return this._target;
    }
    public set target(v: number[]) {
        this._target = v;
    }

    private _distance: number[];
    public get distance(): number[] {
        return this._distance;
    }
    public set distance(v: number[]) {
        this._distance = v;
    }

    private _output: string[];
    public get output(): string[] {
        return this._output;
    }
    public set output(v: string[]) {
        this._output = v;
    }
}