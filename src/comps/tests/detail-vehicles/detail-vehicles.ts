import { Component, Output, EventEmitter } from '@angular/core';
import { FileFactory } from '../../../services/io/file-factory';
import { MasterService } from '../../../services/test-set/master.service'
import { MoreActionsPopover } from '../../../pages/moreactions/moreactions';

@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {
  @Output() onNavigate = new EventEmitter<string>();

  constructor(private fileFactory: FileFactory, private masterService: MasterService, private moreaction: MoreActionsPopover) { }

  navigate(ev) {
    this.onNavigate.emit(ev);
  }
  isPlay: boolean = false;
  resultsobjects = [];
  onRun() {
    this.isPlay = !this.isPlay;

    this.masterService.scanTest()
      .subscribe(data => {
        console.log(data);
        this.resultsobjects = [];
        if (!MoreActionsPopover.isRunAllenabled) {              //code for run selected vechile  
          var items = data.response.data.results;
          items.forEach((element, index) => {
            if (index == this.selectedVehicleIndex) {
              var itemIndex = items[this.selectedVehicleIndex];
              this.resultsobjects.push(itemIndex);
              items.splice(-1, 1);
            }
            var item = {};
            this.resultsobjects.push(item);
          })
        }
        else {                                                  //code for run all
          this.resultsobjects = data.response.data.results;
        }
      }, (rej) => { console.error("Could not load local data", rej) });
    this.isPlay = false;
 
}
isTargetposAvailable: boolean = false;

selectAv() {
  this.isTargetposAvailable = !this.isTargetposAvailable;
}

ngAfterViewInit() {

    this.masterService.scanTest()
      .subscribe(data => {
        console.log(data);
  // this.http.get('assets/jsonfiles/data.json')
  //   .map((res) => res.json())
  //   .subscribe(data => {
      var results = data.response.data.results;
      results.forEach(element => {
        var item = { "item": "1" }
        this.resultsobjects.push(item);
      });
    }, (rej) => { console.error("Could not load local data", rej) });
}

selectedVehicleIndex = 0;

onVehicleClick(index) {
  this.selectedVehicleIndex = index;
}

}
