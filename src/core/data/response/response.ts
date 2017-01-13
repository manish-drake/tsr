import { Data } from './Data';

export class Response {

    private _data: Data[];
    public get data(): Data[] {
        return this._data;
    }
    public set data(v: Data[]) {
        this._data = v;
    }

    private _message: number;
    public get message(): number {
        return this._message;
    }
    public set message(v: number) {
        this._message = v;
    }

    private _status: number;
    public get status(): number {
        return this._status;
    }
    public set status(v: number) {
        this._status = v;
    }

    private _user_param: string;
    public get user_param(): string {
        return this._user_param;
    }
    public set user_param(v: string) {
        this._user_param = v;
    }

    private _version: number;
    public get version(): number {
        return this._version;
    }
    public set version(v: number) {
        this._version = v;
    }

}