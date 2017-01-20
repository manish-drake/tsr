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
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage implements OnInit {
  private: any;
  constructor(
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory,
    private _renderer: Renderer,
    private _router: Router,
    private _svcHeader: HeaderService) {

  }

  group: any;

  parent: any;

  ngOnInit() {
    // this._svcHeader.title = "Groups";
    this.route.params.subscribe(param => {
      var parentName = (param as any).name;
      this.parent = parentName;
      this._svcHeader.title = parentName;
      // var section = this.objectService.createGroup(groupName);
      // this.group = this.broker.createGroupDatasource(section);
      var test = this.objectService.createGroup(parentName);
      this.group = this.broker.createGroupDatasource(test);
      console.log(this.group);

      this._svcHeader.title = parentName;
    })
  }

  selectedCardIndex = 0

  onCardClick(i){
    this.selectedCardIndex = i;
  }


  private clicks = 0;
  doubleTapNavigation(test) {
    this.clicks++;
    if (this.clicks == 1) {
      setTimeout(() => {
        if (this.clicks == 2) {
          this._router.navigate(['detail', test.name, this.parent])
        }
        this.clicks = 0;
      }, 500);

    }
  }

}
