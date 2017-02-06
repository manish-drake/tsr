
export class Hamburger {
    public headers:any = [];
    constructor() {

        var start = { name: "Start", isSelected: true };

        var transponder = { name: "Transponder" };

        var mode_s = { name: "Mode S" };

        var ads_b = { name: "ADS-B" };

        var nav = { name: "NAV" };

        var comm = { name: "Comm" };

        var antenna = { name: "Antenna" };

        var reports = { name: "Reports" };

        var setup = { name: "Setup" };

        var search = { name: "Search" };

        this.headers.push(start);
        this.headers.push(transponder);
        this.headers.push(mode_s);
        this.headers.push(ads_b);
        this.headers.push(nav);
        this.headers.push(comm);
        this.headers.push(antenna);
        this.headers.push(reports);
        this.headers.push(setup);
        this.headers.push(search);

    }
}