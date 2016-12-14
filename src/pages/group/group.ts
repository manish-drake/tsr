import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'

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
  private : any;
  constructor(
    private route: ActivatedRoute,
    private broker: BrokerFactoryService,
    private objectService: Factory,
    private _renderer: Renderer,
    private _router: Router) {

  }

  ionViewDidLoad() {
    console.log('Hello GroupPage Page');
  }

  group: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      var groupName = (param as any).name;
      var section = this.objectService.createGroup(groupName);
      this.group = this.broker.createGroupDatasource(section);
      console.log(this.group);
    })
  }

  public step: string;
  private clicks = 0;
  doubleTapNavigation(section) {
    this.clicks++;
    if (this.clicks == 1) {
      setTimeout(() => {
        console.log(this.clicks);
        if (this.clicks == 1) {
          this.step = section.name;
        }
        if (this.clicks == 2) {
          this._router.navigate(['section', section.name])
        }
        this.clicks = 0;
      }, 500);

    }
  }

  isFavorite: boolean = false;
  favorite() {
    this.isFavorite = !this.isFavorite;
  }
}
