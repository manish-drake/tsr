import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { HomeService } from '../../../services/ui/home.service';
import { BrokerFactoryService } from '../../../services/broker/brokerFactory.service';
import { Factory } from '../../../services/objects/factory.service';
import { MasterService } from '../../../services/test-set/master.service';
import { Logger } from "../../../services/logging/logger";

@Component({
  selector: 'test-detail',
  templateUrl: 'test-detail.html'
})
export class TestDetailComp {

  @ViewChild('Slides') slides: Slides;

  constructor(
    private _router: Router,
    private _svcHome: HomeService,
    private route: ActivatedRoute,
    private _svcBroker: BrokerFactoryService,
    private _objectService: Factory,
    private _svcMaster: MasterService,
    private _logger: Logger
  ) { }

  testsData: any;
  public tests: any[] = [];

  vehicles: any;

  headerName: any;
  testName: any;

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.headerName = (data as any).headername;
      this.testName = (data as any).test;
      this._svcHome.title = this.headerName;
      this._logger.Info(this.testName,' detail is loaded.');

       this.testsData = this._objectService.createTestsData(this.testName);
       this.tests = this._svcBroker.createTestsDetail(this.testsData);
    });
    this._svcMaster.scanTest()
      .subscribe(data => {
        this.vehicles = [];
        this.vehicles = data.response.data.results;
      }, (rej) => { 
        this._logger.Error("Could not load local data", rej);
     });
    this.setFooterResultStatus("before");
  }

  ngOnDestroy() {
    this._svcHome.footerData = undefined;
    clearInterval(this.runInterval);
  }

  selectedVehicle: any;


  onVehicleSelect(ev) {
    if (this.selectedVehicle != ev.e && !this.isRunning) {
      this.selectedVehicle = ev.e;
    }
    this.setVehicleValues(ev.e, ev.i);
  }

  setVehicleValues(e, i) {

    this.tests.forEach(test => {
      this.SetValue(test.name, "Aircraft/Vehicle", '#' + (i + 1));
      this.SetValue(test.name, "Mode S Addr", e.modesaddr);
      this.SetValue(test.name, "ADDRESS", e.address);
      this.SetValue(test.name, "Flight ID", e.flightid);
      this.SetValue(test.name, "FLIGHT ID", e.flightid);
      this.SetValue(test.name, "Qualifier", e.qualifier);
      this.SetValue(test.name, "RF Level", e.rflevel);
      this.SetValue(test.name, "DF", e.df);
      this.SetValue(test.name, "BDS Rcvd (DF17)", e.bdsrcvd);
      this.SetValue(test.name, "Payloads Rcvd", e.payloadsrcvd);
    });
  }

  SetValue(summaryName, key, value) {
    this.tests.forEach(test => {
      if (test.name == summaryName) {
        test.rows.forEach(row => {
          row.forEach(cell => {
            if (cell.key == key) {
              cell.value = value;
            }
          });
        });
      }
    });
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
          .then(succ => this._logger.Debug("Test detail closed: " + succ))
          .catch(err => this._logger.Error("Error, closing test detail: " + err));
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
  runInterval: any;

  onRun() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.setFooterResultStatus("running");
      this.runInterval = setInterval(() => {
        this._svcMaster.runTest(this.tests);
      }, 1000);
    }
    else {
      this.isRunning = false;
      clearInterval(this.runInterval);
      this.setFooterResultStatus("after");
    }
  }

  setFooterResultStatus(_case) {
    var footerResultStatusData = this._objectService.createFooterResultStatusData(_case);
    var footerResultStatus = this._svcBroker.createFooterResultStatus(footerResultStatusData);
    this._svcHome.footerData = footerResultStatus;
  }

}

