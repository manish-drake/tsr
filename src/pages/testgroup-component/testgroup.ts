import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'
import { HeaderService } from '../../services/ui/header.service'

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
    private _svcHeader: HeaderService) {

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
    this.evaluateFavorites()
  }

  evaluateFavorites() {
    var favorites = localStorage.getItem("tsrfavorites");
    var favColl = JSON.parse(favorites);
    this.testgroups.forEach(testgroup => {
      favColl.forEach(element => {
        if (element == testgroup.name) {
          testgroup.isFavorite = true;
        }
      });
    });

    [{}].find
  }

  onFavorite(g) {
    if (!g.isFavorite) {
      g.isFavorite = true;
      this.addToFavorites(g.name);
    }
    else {
      g.isFavorite = false;
      this.removeFromFavorites(g.name);
    }
  }

  addToFavorites(testgroupname) {
    var favorites = localStorage.getItem("tsrfavorites");
    var favColl = [];
    if (favorites == null) {
      favColl.push(testgroupname);
      localStorage.setItem("tsrfavorites", JSON.stringify(favColl))
    }
    else {
      favColl = JSON.parse(favorites)
      favColl.push(testgroupname);
      localStorage.setItem("tsrfavorites", JSON.stringify(favColl));
    }
  }

  removeFromFavorites(testgroupname) {
    var favorites = localStorage.getItem("tsrfavorites");
    if (favorites != null) {
      var favColl = JSON.parse(favorites);
      favColl.forEach((element, index) => {
        if (testgroupname == element) {
          favColl.splice(index, 1);
        }
      });
      localStorage.setItem("tsrfavorites", JSON.stringify(favColl));
      if (this.testHeaderName == "Favorites") {
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
