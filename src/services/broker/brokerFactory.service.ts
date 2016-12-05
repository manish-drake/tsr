import { TestSection } from '../../core/tests/testSection'

export class BrokerFactoryService{
    /**
     *
     */
    constructor() {
        
    }
    createSectionDataSource(testSection: TestSection){
        var tests: any[]=[];
        testSection.Summaries.forEach(summary=>{
            var test = {name: summary.Name, rows: summary.getRows()}
            tests.push(test);
        })
        return {name: testSection.Name, tests: tests};
    }

} 