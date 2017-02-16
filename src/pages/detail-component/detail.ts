import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../../services/ui/home.service';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { Factory } from '../../services/objects/factory.service';
import { MasterService } from '../../services/test-set/master.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class TestDetailComp {

  @ViewChild('Slides') slides: Slides;


  currentSegment: any = -1;

  constructor(
    private _router: Router,
    private _svcHome: HomeService,
    private route: ActivatedRoute,
    private _broker: BrokerFactoryService,
    private _objectService: Factory,
    private _master: MasterService) { }

  public tests: any;

  headerName: any;
  testName: any;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.headerName = (data as any).headername;
      this.testName = (data as any).test;
      this._svcHome.title = this.headerName;

      this._broker.generateTestsDetail(this.testName);
      this._broker.getTestsDetail().subscribe(val => {
        this.tests = val;       
      });
    });
    this._svcHome.footerData = this.generateFooterResultStatus("before");
  }
  
  ngOnDestroy(){
    this._svcHome.footerData = undefined;
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

  onNavigate(ev: string) {
    switch (ev) {
      case 'close': {
        this._router.navigate(['testgroup', this.headerName])
          .then(succ => console.log("Detail Closed: " + succ))
          .catch(err => console.log("Error Closing Detail: " + err));
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

  isRunning: boolean = false;

  onRun() {
    this.isRunning = !this.isRunning;
    var run = this.generateFooterResultStatus("running");
    this._svcHome.footerData = run;
    setTimeout(() => {
      this.isRunning = false;
      var stop = this.generateFooterResultStatus("after");
      this._svcHome.footerData = stop;
    }, 3000);
  }

  generateFooterResultStatus(_case) {
    var footerResultStatusData = this._objectService.createFooterResultStatusData(_case);
    var footerResultStatus = this._broker.createFooterResultStatus(footerResultStatusData);
    return footerResultStatus;
  }
}

