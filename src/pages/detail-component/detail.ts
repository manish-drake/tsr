import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { HeaderService } from '../../services/ui/header.service';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { MasterService } from '../../services/test-set/master.service';
import { Dictionary } from '../../common/dictionary';

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
    private _master: MasterService) { }

  public tests: any;

  headerName:any;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.headerName = (data as any).headername;
      var testName = (data as any).test;
      this._svcHeader.title = testName;

      this.broker.generateTestsDetail(testName);
      this.broker.getTestsDetail().subscribe(val => {
        this.tests = val;
        console.log(this.tests);
      });
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
    var args = new Dictionary<string,string>();
    args.add("a","b");
    this._master.runTest("",args);
    setTimeout(() => {
      this.isRunnig = false;
    }, 2000);
    
  }

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['testgroup', this.headerName])
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
  // slideChanged() {
  //   if (this.slides.isEnd() || this.slides.isBeginning()) {
  //     this.slides.loop = true;
  //   }
  // }
}

