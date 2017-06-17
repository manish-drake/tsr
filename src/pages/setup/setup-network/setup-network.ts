import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from '../../../services/test-set/devices.service';
import { ConnectionService } from '../../../services/test-set/connection.service';
import { Logger } from "../../../services/logging/logger";

@Component({
  selector: 'setup-network',
  templateUrl: 'setup-network.html'
})
export class SetupNetworkComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _svcDevices: DevicesService,
    private _svcConnection: ConnectionService,
    private _logger: Logger
  ) { }

  parent: string;
  connectedDeviceName: string;
  isConnectivityEnabled: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
    this._svcDevices.getconnectedDevice().subscribe(val => this.connectedDeviceName = val.name);
  }

  ngAfterViewInit() {
    this._logger.Info("Setup_Network component loaded");
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

  onScanDevices() {
    this._svcConnection.ScanDevices();
  }

  controllerObservers: any[] = [
    { name: "Test Set Remote #1", iscontroller: true },
    { name: "Test Set Remote #2", iscontroller: false },
    { name: "Test Set Remote #3", iscontroller: false }
  ]

  connectivityChanged() {
    this.isConnectivityEnabled != this.isConnectivityEnabled;
  }

}
