import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  // slides = [{name: 'Test 1'},{name: 'Test 2'},{name: 'Test 3'}];
  slider: any;
  options: any;

  constructor(
    private _router: Router,
    private _svcHeader: HeaderService,
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) {


  }

  public testset: any;

  ngOnInit() {
    this._svcHeader.title = "Detail";

    this.route.params.subscribe(data => {
      var testName = (data as any).test;
      var testSectionName = (data as any).parent;
      var test = this.objectService.createTest(testName, testSectionName);    
      this.testset = this.broker.createTestDataSource(test);

      // var sectionName = (data as any).parent;
      // this._svcHeader.title = sectionName;
      // var section = this.objectService.createSection(sectionName);
      // this.testset = this.broker.createSectionDataSource(section);

      // var initialSlide = 0;
      // this.testset.tests.forEach((element, index) => {
      //   if (element.name == (data as any).test) {
      //     initialSlide = index;
      //   }
      // });

      // this.options = {
      //   initialSlide: initialSlide,
      //   loop: true,
      //   onInit: (slides: any) => {
      //     this.slider = slides;
      //   }
      // }
    });
  }

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['section', this.testset.name]);
        break;
      }
      case 'next': {
        this.slider.slideNext();
        break;
      }
      case 'prev': {
        this.slider.slidePrev();
        break;
      }
      default: { break; }
    }
  }

}
