
export class Menu {
    public headers: any = [];
    constructor() {

        var start = { route: "testgroup", name: "Start", isSelected: true };

        var transponder = { route: "testgroup", name: "Transponder" };

        var mode_s = { route: "testgroup", name: "Mode S" };

        var ads_b = { route: "testgroup", name: "ADS-B" };

        var nav = { route: "testgroup", name: "NAV" };

        var comm = { route: "testgroup", name: "Comm" };

        var antenna = {route: "antenna", name: "Antenna" };

        var reports = {route: "testgroup", name: "Reports" };

        var setup = {route: "setup", name: "Setup" };

        var search = {route: "testgroup", name: "Search" };

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