import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CaltypeSelectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'caltype-selection',
  templateUrl: 'caltype-selection.html',
})
export class CalTypeSelectionComp {

  @Input() calTypes: any[];
  @Output() onTypeChanged = new EventEmitter<any>();
  @Input() selectedType: any;
  constructor() { }

  onTypeChange(e) {
    this.onTypeChanged.emit(e);
  }

}
