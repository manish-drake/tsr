import { TestParamCell } from './testParamCell';
import { Dictionary } from '../../common/dictionary'

export class Test {

    private _Styles: Dictionary<string, string>;
    public get Styles(): Dictionary<string, string> {
        if (!this._Styles)
            this._Styles = new Dictionary<string, string>();
        return this._Styles;
    }

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

    private _isStartItem: boolean;
    public get isStartItem(): boolean {
        return this._isStartItem;
    }
    public set isStartItem(v: boolean) {
        this._isStartItem = v;
    }

    private _isGuideAvailable: boolean;
    public get isGuideAvailable(): boolean {
        return this._isGuideAvailable;
    }
    public set isGuideAvailable(v: boolean) {
        this._isGuideAvailable = v;
    }

    private _isGuideDisabled: boolean;
    public get isGuideDisabled(): boolean {
        return this._isGuideDisabled;
    }
    public set isGuideDisabled(v: boolean) {
        this._isGuideDisabled = v;
    }

    private _SummaryResult: any;
    public get SummaryResult(): any {
        return this._SummaryResult;
    }
    public set SummaryResult(v: any) {
        this._SummaryResult = v;
    }

    private _Summaries: Test[];
    public get Summaries(): Test[] {
        if (!this._Summaries)
            this._Summaries = [];
        return this._Summaries;
    }
    public set Summaries(v: Test[]) {
        this._Summaries = v;
    }

    private _TestParamCells: TestParamCell[];
    public get TestParamCells(): TestParamCell[] {
        if (!this._TestParamCells)
            this._TestParamCells = [];
        return this._TestParamCells;
    }
    public set TestParamCells(v: TestParamCell[]) {
        this._TestParamCells = v;
    }

    SetValue(summaryName: string, key: string, value: string) {
        this.Summaries.forEach(summary => {
            if (summary.Name == summaryName) {
                summary.TestParamCells.forEach(testParamCell => {
                    if (testParamCell.TestParam.Key == key) {
                        testParamCell.TestParam.Value = value;
                    }
                });
            }
        });
    }

}