import { Component, Input } from '@angular/core';


@Component({
  selector: 'detail-waveform',
  templateUrl: 'detail-waveform.html'
})
export class DetailWaveformComp {

  @Input() test: any;

  constructor() {}

}
