import { Section } from './section';
import { subSection } from './subSection';

export class Hamburger{
    public sections:Section[] = [];
    constructor(){

        var start = new Section();
        start.name="Start";
        var favorites = new subSection();
        favorites.name="Favorites";
        favorites.count=2;
        var scheduled = new subSection();
        scheduled.name="Scheduled";
        scheduled.count=0;
        start.subSections.push(favorites);
        start.subSections.push(scheduled);

        var ats = new Section();
        ats.name="Auto Test Sequence";
        var trsCheck = new subSection();
        trsCheck.name="Transponder Check";
        trsCheck.count=1;
        ats.subSections.push(trsCheck);

        this.sections.push(start);
        this.sections.push(ats);
    }
}