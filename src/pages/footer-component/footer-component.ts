import { Component } from '@angular/core';
import { MasterService } from '../../services/test-set/master.service'

@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  isTestContext: boolean = false;

  constructor(private _master: MasterService) {
    this._master.getIfTestContext().subscribe(val => this.isTestContext = val);
  }

}
