import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Master } from '../../services/test-set/master.service'
import { HeaderService } from '../../services/ui/header.service'
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'
import { Dictionary } from '../../common/dictionary'
import { DetailPage } from '../detail/detail';
import { TestSectionComp } from '../../comps/tests/section/section.comp'
import { TestSection } from '../../core/tests/testSection'

/*
  Generated class for the Sections page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sections',
  templateUrl: 'sections.html'
})
export class SectionsPage implements OnInit {
  testData: string;
  private dataSource: any;
  constructor(
    private master: Master, 
    private _svcHeader: HeaderService, 
    private activeRoute: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) { }

  ngOnInit(){
      this._svcHeader.title = "Sections";
      this.activeRoute.params.subscribe(data => {
        console.log(data);
        var sectionName = (data as any).name;
        var section = this.objectService.createSection(sectionName, "");
        this.dataSource = this.broker.createSectionDataSource(section);
      })
  }

  ionViewDidLoad() {
    var dic = new Dictionary<string, string>();
    dic.add("a","1");
    dic.add("b","2");
    dic.add("c","3");
    this.master.runTest("ads-b", dic);    
  }

  openDetail() {
    // Reset the NavController to have just this page
    // we wouldn't want the back button to show in this scenario

  }
  onTap(e){
    
  }
}
