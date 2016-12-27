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

  currentSegment: any = 0;

  constructor(
    private _router: Router,
    private _svcHeader: HeaderService,
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) {

  }

  public testset: any;

  ngOnInit() {

    this.route.params.subscribe(data => {
      // var sectionDetailName = (data as any).test;
      var groupName = (data as any).parent;
      this._svcHeader.title = groupName;
      var sectionsDetailData = this.objectService.createSectionsDetailData(groupName);
      this.testset = this.broker.createSectionsDetail(sectionsDetailData);
      console.log( this.testset );

      // var initialSlide = 0;
      // this.testset.tests.forEach((element, index) => {
      //   if (element.name == (data as any).test) {
      //     currentSegment = index;
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
  showSegment(selectedindex: number) {
    if (selectedindex != this.currentSegment) {
      this.currentSegment = selectedindex;
      console.log(this.currentSegment, '-----', selectedindex);
    }

   
  }

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['section', this.testset.name]);
        break;
      }
      // case 'next': {
      //   this.slider.slideNext();
      //   break;
      // }
      // case 'prev': {
      //   this.slider.slidePrev();
      //   break;
      // }
      default: { break; }
    }
  }

}
