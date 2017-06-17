import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from '../../../services/test-set/devices.service';
import { ConnectionService } from '../../../services/test-set/connection.service';
import { Logger } from "../../../services/logging/logger";
import { AlertsService } from '../../../services/ui/alerts.service';

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
    private _logger: Logger,
    private _svcAlerts: AlertsService
  ) { }

  parent: string;
  connectedDevice: string;
  isConnectivityEnabled: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
    this._svcDevices.getconnectedDevice().subscribe(val => this.connectedDevice = val);
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
    { name: "TestSet Remote #1", iscontroller: true },
    { name: "TestSet Remote #2", iscontroller: false },
    { name: "TestSet Remote #3", iscontroller: false }
  ]

  connectivityChanged() {
    this.isConnectivityEnabled != this.isConnectivityEnabled;
    if(!this.isConnectivityEnabled){
      this._svcConnection.onDisconnect();
    }
  }

  disconnectDevice() {
    this._svcAlerts.ConfirmationAlert("Disconnect device?", "", "OK")
      .then(() => {
        this._svcDevices.setConnectedDevice(undefined);
        this._logger.Debug("Disconnected device by user");
      })
      .catch(() => this._logger.Debug("Disconnect from device not confirmed"))
  }

}
