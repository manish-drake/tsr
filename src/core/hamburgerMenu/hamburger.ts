import { Header } from './header';

export class Hamburger {
    public headers: Header[] = [];
    constructor() {

        var start = new Header();
        start.Name = "Start";
        start.Groups = ["Favorites", "Scheduled"];

        var ats = new Header();
        ats.Name = "Auto Test Sequence";
        ats.Groups = ["Transponder Check"];

        var it = new Header();
        it.Name = "Individual Tests";
        it.Groups = ["Mode S", "UAT"];

        var simul = new Header();
        simul.Name = "Simulations";
        simul.Groups = ["Flightplans"];

        var nav = new Header();
        nav.Name = "NAV";
        nav.Groups =  ["ILS"];

        var search = new Header();
        search.Name = "Search";
        search.Groups = ["Keyword Search", "Saved Searches"];

        var sys = new Header();
        sys.Name = "System";
        sys.Groups = ["Setup", "About", "Notifications"];

        this.headers.push(start);
        this.headers.push(ats);
        this.headers.push(it);
        this.headers.push(simul);
        this.headers.push(nav);
        this.headers.push(search);
        this.headers.push(sys);

    }
}