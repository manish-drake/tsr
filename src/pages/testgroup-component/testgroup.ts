import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ModalController, Content } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { GuidePage } from '../../pages/guide/guide';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { HomeService } from '../../services/ui/home.service';
import { LocalStorage } from '../../services/storage/local-storage';
import { TestGroupsService } from '../../services/tests/testgroups.service';
import { TestContextService } from '../../services/tests/testcontext.service';


@Component({
  selector: 'testgroup',
  templateUrl: 'testgroup.html'
})

export class TestGroupComp implements OnInit {

  @ViewChild('groupContent') groupContent: ElementRef;

  gContent: HTMLDivElement;

  private: any;
  constructor(
    private content: Content,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private _renderer: Renderer,
    private _router: Router,
    private _svcHome: HomeService,
    private _localStorage: LocalStorage,
    private _svcTestGroups: TestGroupsService,
    private _svcTextContext: TestContextService) { }

  testgroups: any[] = [];
  headerName: any;
  isScrollAvailable: boolean = false;

  ngOnInit() {
    this.gContent = this.groupContent.nativeElement;   
    this.route.params.subscribe(param => {
      this.headerName = (param as any).name;
      this._svcHome.title = this.headerName;
      this._svcTestGroups.generateTestGroups(this.headerName);
      this._svcTestGroups.getTestgroups().subscribe(val => {
        this.testgroups = val;
        this.evaluateStartItems();
        if (this.testgroups.length != 0) {
          this.onCardClick(this.testgroups[0]);
        }
      });
    });
  }

  evaluateStartItems() {
    var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
    if (startItems != null) {
      var favColl = JSON.parse(startItems);
      this.testgroups.forEach(testgroup => {
        favColl.forEach(element => {
          if (element == testgroup.name) {
            testgroup.isStartItem = true;
          }
        });
      });
    }
  }

  selectedTestGroup: any;

  onCardClick(testgroup) {
    this.selectedTestGroup = testgroup;
    this._svcTextContext.setTestInContext(testgroup);
  }

  private clicks = 0;
  doubleTapNavigation(test) {
    this.clicks++;
    if (this.clicks == 1) {
      setTimeout(() => {
        if (this.clicks == 2) {
          this._router.navigate(['detail', test.name, this.headerName])
        }
        this.clicks = 0;
      }, 500);
    }
  }

  openGuide(e) {
    var modal = this.modalCtrl.create(GuidePage, { param: e });
    modal.present();
  }

  // Code to show more
  onResize(event) {
    this.contentForMore();
  }
 
  ngAfterViewChecked() {
    setTimeout(() => {
      this.contentForMore();
    }, 150);
  }

  contentForMore() {
    this.content.resize();
    console.log(this.content.contentHeight);
    if (this.gContent.scrollHeight > this.content.contentHeight) {
      var st = Math.max(this.gContent.scrollTop, this.content.scrollTop);
      if ((st + this.content.contentHeight) >= this.gContent.scrollHeight) {  // if scroll bar reach bottom
        this.isScrollAvailable = false;
      } else {
        this.isScrollAvailable = true;
      }
    }
    else if (this.gContent.scrollHeight <= this.content.contentHeight) {
      this.isScrollAvailable = false;
    }
  }

}