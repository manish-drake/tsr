import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
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
  private datasource: any;
  constructor(
      private route: ActivatedRoute, 
      private broker: BrokerFactoryService,
      private objectService: Factory) {

  }

  ionViewDidLoad() {
    console.log('Hello GroupPage Page');
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      var name = (param as any).groupName;
        var group = this.objectService.createGroup(name);
      this.datasource = this.broker.createGroupDatasource(group);
    })
  }

}
