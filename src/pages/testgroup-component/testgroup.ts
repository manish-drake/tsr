import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'
import { HeaderService } from '../../services/ui/header.service'

import { LocalStorage } from '../../services/storage/local-storage'

@Component({
  selector: 'testgroup',
  templateUrl: 'testgroup.html'
})
export class TestGroupComp implements OnInit {
  private: any;
  constructor(
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory,
    private _renderer: Renderer,
    private _router: Router,
    private _svcHeader: HeaderService,
    private _localStorage: LocalStorage) {

  }

  testgroups: any = [];

  testHeaderName: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.testHeaderName = (param as any).name;
      this._svcHeader.title = this.testHeaderName;
      this.getData();
    })
  }

  getData() {
    var testGroupsData = this.objectService.createTestGroupsData(this.testHeaderName);
    this.testgroups = this.broker.createTestGroups(testGroupsData);
    console.log(this.testgroups);
    this.evaluateStartItem()
  }

  evaluateStartItem() {
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

  onStartItem(g) {
    if (!g.isStartItem) {
      g.isStartItem = true;
      this.addToStart(g.name);
    }
    else {
      g.isStartItem = false;
      this.removeFromStart(g.name);
    }
  }

  addToStart(testgroupname) {
    var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
    var favColl = [];
    if (startItems == null) {
      favColl.push(testgroupname);
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl))
    }
    else {
      favColl = JSON.parse(startItems)
      favColl.push(testgroupname);
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));
    }
  }

  removeFromStart(testgroupname) {
    var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
    if (startItems != null) {
      var favColl = JSON.parse(startItems);
      favColl.forEach((element, index) => {
        if (testgroupname == element) {
          favColl.splice(index, 1);
        }
      });
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));
      if (this.testHeaderName == "Start") {
        this.getData();
      }
    }
  }

  selectedCardIndex = 0

  onCardClick(i, group) {
    this.selectedCardIndex = i;
  }

  private clicks = 0;
  doubleTapNavigation(test) {
    this.clicks++;
    if (this.clicks == 1) {
      setTimeout(() => {
        if (this.clicks == 2) {
          this._router.navigate(['detail', test.name, this.testHeaderName])
        }
        this.clicks = 0;
      }, 500);
    }
  }

}
