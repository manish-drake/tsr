import { Component } from '@angular/core';
import { MasterService } from '../../services/test-set/master.service'

@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  contextualResultStatus: any;

  constructor(private _master: MasterService) {
    this._master.getFooterResultStatus().subscribe(val => this.contextualResultStatus = val);
  }

}
