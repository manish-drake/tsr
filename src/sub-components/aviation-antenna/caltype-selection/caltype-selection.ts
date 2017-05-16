import { Component } from '@angular/core';

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

  constructor() { }

  selectedTypeIndex: number = 0;

  calTypes: any[] = [
    { name: "SHORT" },
    { name: "OPEN" },
    { name: "LOAD" },
    { name: "THRU" }
  ]

}
