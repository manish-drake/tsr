import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'
import { HeaderService } from '../../services/ui/header.service'

/*
  Generated class for the Group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

  testgroups: any;

  testHeaderName: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.testHeaderName = (param as any).name;
      var testGroupsData = this.objectService.createTestGroupsData(this.testHeaderName);
      this.testgroups = this.broker.createTestGroups(testGroupsData);
      console.log(this.testgroups);

      this._svcHeader.title = this.testHeaderName;
    })
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

  onFavorite(g) {
    g.isFavorite = !g.isFavorite;
  }

}
