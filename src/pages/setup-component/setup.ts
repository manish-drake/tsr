import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/ui/header.service'
import { SetupFactory } from '../../services/objects/setup-factory'
import { SetupBrokerFactory } from '../../services/broker/setupbrokerfactory';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
  providers:[SetupFactory]
})
export class SetupComp {

  constructor(private route: ActivatedRoute,
  private _svcHeader: HeaderService,
  private setupFactory: SetupFactory,
  private setupBroker: SetupBrokerFactory) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupComp');
  }

  headerName: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this._svcHeader.title = (param as any).name;
      this.getData();
    })
  }

  allsetup: any = [];

  getData() {
    var setupData=  this.setupFactory.createAllSetupData();
    this.allsetup = setupData;
    // this.allsetup = this.setupBroker.createSetupCard(setupData);

    console.log(this.allsetup);
  }

}
