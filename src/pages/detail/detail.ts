import { Component, ViewChild } from '@angular/core';
import { Slides} from 'ionic-angular'
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

  @ViewChild('Slides') slides: Slides;

  currentSegment: any = -1;

  constructor(
    private _router: Router,
    private _svcHeader: HeaderService,
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) {

  }

  public testset: any;
  parent: any;
  
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.parent = (data as any).parent;
      var groupName = (data as any).test;
      this._svcHeader.title = groupName;
      var sectionsDetailData = this.objectService.createSectionsDetailData(groupName);
      this.testset = this.broker.createSectionsDetail(sectionsDetailData);

      this.slides.loop = true;
      this.slides.initialSlide = 0;
    });
  }

  // showSegment(selectedindex: number) {
  //   if (selectedindex != this.currentSegment) {
  //     this.currentSegment = selectedindex;
  //   }   
  // }

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['group', "UAT"]);
        break;
      }
      case 'next': {
        this.slides.slideNext();
        break;
      }
      case 'prev': {
        this.slides.slidePrev();
        break;
      }
      default: { break; }
    }
  }

}
