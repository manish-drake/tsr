import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/ui/header.service'
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  public dataSource: any;

  // slides = [{name: 'Test 1'},{name: 'Test 2'},{name: 'Test 3'}];
  slider: any;
  options: any;

  constructor(
    private _svcHeader: HeaderService, 
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) {

      this.options = {
      loop: true,
      onInit: (slides: any) =>
        this.slider = slides
    }
    }

  ngOnInit(){
      this._svcHeader.title = "Detail";
      
      this.route.params.subscribe(data => {
        
        var testName = (data as any).test;
        var testSectionName = (data as any).parent;
        var test = this.objectService.createTest(testName, testSectionName);    
        this.dataSource = this.broker.createTestDataSource(test);
      });
  }

  onNavigate(ev:string){
    this.slider.sliderNext(true, 250);
  }
  
}
