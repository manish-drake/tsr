import { Section } from './section';
import { subSection } from './subSection';

export class Hamburger {
    public sections: Section[] = [];
    constructor() {

        var start = new Section();
        start.name = "Start";
        var favorites = new subSection();
        favorites.name = "Favorites";
        favorites.count = 2;
        var scheduled = new subSection();
        scheduled.name = "Scheduled";
        scheduled.count = 0;
        start.subSections.push(favorites);
        start.subSections.push(scheduled);

        var ats = new Section();
        ats.name = "Auto Test Sequence";
        var trsCheck = new subSection();
        trsCheck.name = "Transponder Check";
        trsCheck.count = 1;
        ats.subSections.push(trsCheck);

        var it = new Section();
        it.name = "Individual Tests";
        var adsb = new subSection();
        adsb.name = "ADS-B";
        adsb.count = 9;
        var modes = new subSection();
        modes.name = "Mode S";
        modes.count = 1;
        var uatout = new subSection();
        uatout.name = "UAT OUT";
        uatout.count = 8;
        var uatin = new subSection();
        uatin.name = "UAT IN";
        uatin.count = 3;
        it.subSections.push(adsb);
        it.subSections.push(modes);
        it.subSections.push(uatout);
        it.subSections.push(uatin);

        var simul = new Section();
        simul.name = "Simulations";
        var fp = new subSection();
        fp.name = "Flightplans";
        fp.count = 1;
        simul.subSections.push(fp);

        var nav = new Section();
        nav.name = "NAV";
        var ils = new subSection();
        ils.name = "ILS";
        ils.count = 4;
        nav.subSections.push(ils);

        var search = new Section();
        search.name = "Search";
        var ks = new subSection();
        ks.name = "Keyword Search";
        ks.count = 12;
        var ss = new subSection();
        ss.name = "Saved Searches";
        ss.count = 0;
        search.subSections.push(ks);
        search.subSections.push(ss);

        var sys = new Section();
        sys.name = "System";
        var setup = new subSection();
        setup.name = "Setup";
        setup.count = 9;
        var abt = new subSection();
        abt.name = "About";
        abt.count = 2;
        var notif = new subSection();
        notif.name = "Notifications";
        notif.count = 4;
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