import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from '../../services/test-set/devices.service';
import { ConnectionService } from '../../services/test-set/connection.service';

@Component({
  selector: 'page-network-component',
  templateUrl: 'network-component.html'
})
export class SetupNetworkComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _svcDevices: DevicesService,
    private _svcConnection: ConnectionService
  ) { }

  parent: string;
  connectedDeviceName: string;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
    this._svcDevices.getconnectedDevice().subscribe(val => this.connectedDeviceName = val.name);
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

  onScanDevices() {
    this._svcConnection.ScanDevices();
  }

}
