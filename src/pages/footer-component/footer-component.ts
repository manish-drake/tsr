import { Component, Input } from '@angular/core';
import { BrokerFactoryService } from '../../services/broker/brokerFactory.service';
import { Factory } from '../../services/objects/factory.service';

@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {
  @Input() data: any;

  constructor(private _broker: BrokerFactoryService, private _objectService: Factory) { }


}
