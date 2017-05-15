import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Router } from '@angular/router';
import { LocalStorage } from '../../../services/storage/local-storage';

/**
 * Generated class for the BandSelectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'mode-selection',
  templateUrl: 'mode-selection.html',
})
export class ModeSelectionComp {

  @Input() selectedMode: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _router: Router,
    private _localStorage: LocalStorage
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModeSelectionPage');
  }

  onModeChanged(ev) {

    if (JSON.stringify(ev) != this.selectedMode) {
      switch (ev) {
        case "CAL":
          this._router.navigate(['aviation-cal', "Antenna"]);
          this.setSelectedMode('aviation-cal');
          break;
        case "VSWR":
          this._router.navigate(['aviation-vswr', "Antenna"]);
          this.setSelectedMode('aviation-vswr');
          break;
        case "LOSS":
          this._router.navigate(['aviation-loss', "Antenna"]);
          this.setSelectedMode('aviation-loss');
          break;
        case "DTF":
          this._router.navigate(['aviation-dtf', "Antenna"]);
          this.setSelectedMode('aviation-dtf');
          break;
        default:
          this._router.navigate(['aviation-cal', "Antenna"]);
          this.setSelectedMode('aviation-cal');
          break;
      }

    }
  }

  setSelectedMode(e) {
    this._localStorage.SetItem(this._localStorage.keyForAviationMode(), e);
  }

}
