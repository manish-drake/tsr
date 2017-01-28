import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { HeaderService } from '../../services/ui/header.service';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { Factory } from '../../services/objects/factory.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class TestDetailComp {

  @ViewChild('Slides') slides: Slides;

  currentSegment: any = -1;

  constructor(
    private _router: Router,
    private _svcHeader: HeaderService,
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory) {

  }

  public tests: any;

  ngOnInit() {
    this.route.params.subscribe(data => {
      var testGroupName = (data as any).test;
      var testsData = this.objectService.createTestsData(testGroupName);
      this.tests = this.broker.createTests(testsData);
      console.log(this.tests);

      this._svcHeader.title = testGroupName;
    });
  
  }

  selectedVehicle: any;

  onVehicleSelect(e) {
    if (this.selectedVehicle != e) {
      this.selectedVehicle = e;
    }
  }

  currentView: any = "default";

  nextViewIcon = "locate"

  changeView() {
    if (this.currentView == "default") {
      this.currentView = "radar";
      this.nextViewIcon = "pulse";
    }
    else if (this.currentView == "radar") {
      this.currentView = "waveform";
      this.nextViewIcon = "list-box";
    }
    else if (this.currentView == "waveform") {
      this.currentView = "default";
      this.nextViewIcon = "locate";
    }
  }

  isRunnig: boolean = false;

  onRun() {
    this.isRunnig = !this.isRunnig;
  }

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['group', "UAT"])
          .then(succ => console.log("Detail Closed: " + succ))
          .catch(err => console.log("Error Closing Detail: " + err))
        break;
      }
      case 'next': {
        if (this.slides.isEnd()) {
          this.slides.slideTo(0, 1000);
        }
        else
          this.slides.slideNext(700);
        break;
      }
      case 'prev': {
        if (this.slides.isBeginning()) {
          let sectionlength = this.slides.length();
          var lastCardIndex = sectionlength - 1;
          this.slides.slideTo(lastCardIndex, 1200);
        }
        else
          this.slides.slidePrev(1500);
        break;
      }
      default: { break; }
    }
  }
}

