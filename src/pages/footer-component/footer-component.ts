import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus, StatusObject } from 'ionic-native';

@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  constructor(public navCtrl: NavController) { }

  displaydate: any;

  ngAfterViewInit() {
    this.displaydate = Date();
    setInterval(() => {
      this.displaydate = Date();
    }, 1000);

    BatteryStatus.onChange().subscribe(
      (status: StatusObject) => {
        this.onBatteryStatus(status);
      }
    );
  }

  batteryLevel: any = "100%";
  isbatteryPlugged:boolean = false;

  onBatteryStatus(status: StatusObject) {
    this.batteryLevel = status.level + "%";
    if (status.isPlugged) {
      this.isbatteryPlugged = true;
    }
    else{
      this.isbatteryPlugged = false;
    }
  }


}
