import { Params } from './Params';

export class Request {

    private _version: number;
    public get version(): number {
        return this._version;
    }
    public set version(v: number) {
        this._version = v;
    }

    private _message: number;
    public get message(): number {
        return this._message;
    }
    public set message(v: number) {
        this._message = v;
    }

    private _params: Params[];
    public get params(): Params[] {
        return this._params;
    }
    public set params(v: Params[]) {
        this._params = v;
    }
}