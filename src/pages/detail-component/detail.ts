import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../../services/ui/home.service';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { Factory } from '../../services/objects/factory.service';
import { MasterService } from '../../services/test-set/master.service';
import { TestContextService } from '../../services/tests/testcontext.service';
import { UserService } from '../../services/test-set/user.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class TestDetailComp {

  @ViewChild('Slides') slides: Slides;

  constructor(
    private _router: Router,
    private _svcHome: HomeService,
    private route: ActivatedRoute,
    private _svcBroker: BrokerFactoryService,
    private _objectService: Factory,
    private _master: MasterService,
    private _svcTextContext: TestContextService,
    private _svcUser: UserService) { }

  public tests: any;

  headerName: any;
  testName: any;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.headerName = (data as any).headername;
      this.testName = (data as any).test;
      this._svcHome.title = this.testName;

      var testsData = this._objectService.createTestsData(this.testName);
      this.tests = this._svcBroker.createTestsDetail(testsData);
    });
    this.setFooterResultStatus("before");
  }

  ngOnDestroy() {
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
    this.setFooterResultStatus("running");
    setTimeout(() => {
      this.isRunning = false;
      this.setFooterResultStatus("after");
    }, 3000);

    this.setTestSummaryResult();
  }

  setFooterResultStatus(_case) {
    var footerResultStatusData = this._objectService.createFooterResultStatusData(_case);
    var footerResultStatus = this._svcBroker.createFooterResultStatus(footerResultStatusData);
    this._svcHome.footerData = footerResultStatus;
  }

  setTestSummaryResult() {
    var userName;
    this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
    var dateTime = Date.now();
    this._svcTextContext.getTestInContext().subscribe(val => {
      val.summaryResult = dateTime + "3/15/17 12:18; 23455AA; " + userName + "; Bottom Antenna; 50Ft; PASS"
    });
  }
}

