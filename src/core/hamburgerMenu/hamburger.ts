import { Header } from './header';

export class Hamburger {
    public headers: Header[] = [];
    constructor() {

        var start = new Header();
        start.Name = "Start";
        start.Groups = [{ name: "Favorites", isSelected: true }, { name: "Scheduled" }];

        var ats = new Header();
        ats.Name = "Auto Test Sequence";
        ats.Groups = [{ name: "Transponder Check" }];

        var it = new Header();
        it.Name = "Individual Tests";
        it.Groups = [{ name: "Mode S" }, { name: "ADS-B" }];

        var simul = new Header();
        simul.Name = "Simulations";
        simul.Groups = [{ name: "Flightplans" }];

        var nav = new Header();
        nav.Name = "NAV";
        nav.Groups = [{ name: "ILS" }];

        var search = new Header();
        search.Name = "Search";
        search.Groups = [{ name: "Keyword Search" }, { name: "Saved Searches" }];

        var sys = new Header();
        sys.Name = "System";
        sys.Groups = [{ name: "Setup" }, { name: "About" }, { name: "Notifications" }];

        this.headers.push(start);
        this.headers.push(ats);
        this.headers.push(it);
        this.headers.push(simul);
        this.headers.push(nav);
        this.headers.push(search);
        this.headers.push(sys);

    }
}