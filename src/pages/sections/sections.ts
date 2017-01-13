import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeaderService } from '../../services/ui/header.service'
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service'
import { Factory } from '../../services/objects/factory.service'
import { FileIOService } from '../../services/io/file-io.service'
import { Platform } from 'ionic-angular';

/*
  Generated class for the Sections page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sections',
  templateUrl: 'sections.html'
})
export class SectionsPage implements OnInit {
  public dataSource: any;
  constructor(
    private _svcHeader: HeaderService,
    private activeRoute: ActivatedRoute,
    private broker: BrokerFactoryService,
    public filesys: FileIOService,
    private platform: Platform,
    private objectService: Factory) {

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.filesys.getFolder("filesystem");
      }
    })


  }

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      var groupName = (data as any).name;
      this._svcHeader.title = groupName;
      // var sectionsSummaryData = this.objectService.createSectionsSummaryData(groupName);
      // this.dataSource = this.broker.createSectionsSummary(sectionsSummaryData);
       
    })

  }

}
