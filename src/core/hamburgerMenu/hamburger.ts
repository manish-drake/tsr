import { Section } from './section';
import { subSection } from './subSection';

export class Hamburger {
    public sections: Section[] = [];
    constructor() {

        var start = new Section();
        start.name = "Start";
        var favorites = new subSection();
        favorites.name = "Favorites";
        var scheduled = new subSection();
        scheduled.name = "Scheduled";
        start.subSections.push(favorites);
        start.subSections.push(scheduled);

        var ats = new Section();
        ats.name = "Auto Test Sequence";
        var trsCheck = new subSection();
        trsCheck.name = "Transponder Check";
        ats.subSections.push(trsCheck);

        var it = new Section();
        it.name = "Individual Tests";
        var modes = new subSection();
        modes.name = "Mode S";        
        var uatout = new subSection();
        uatout.name = "UAT OUT";
        it.subSections.push(modes);
        it.subSections.push(uatout);

        var simul = new Section();
        simul.name = "Simulations";
        var fp = new subSection();
        fp.name = "Flightplans";
        simul.subSections.push(fp);

        var nav = new Section();
        nav.name = "NAV";
        var ils = new subSection();
        ils.name = "ILS";
        nav.subSections.push(ils);

        var search = new Section();
        search.name = "Search";
        var ks = new subSection();
        ks.name = "Keyword Search";
        var ss = new subSection();
        ss.name = "Saved Searches";
        search.subSections.push(ks);
        search.subSections.push(ss);

        var sys = new Section();
        sys.name = "System";
        var setup = new subSection();
        setup.name = "Setup";
        var abt = new subSection();
        abt.name = "About";
        var notif = new subSection();
        notif.name = "Notifications";
        sys.subSections.push(setup);
        sys.subSections.push(abt);
        sys.subSections.push(notif);

        this.sections.push(start);
        this.sections.push(ats);
        this.sections.push(it);
        this.sections.push(simul);
        this.sections.push(nav);
        this.sections.push(search);
        this.sections.push(sys);

    }
}