import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { FileFactory } from '../../../services/io/file-factory';
import { MoreActionsPopover } from '../../../pages/moreactions/moreactions';

/*
  Generated class for the DetailVehicles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {
  @Output() onNavigate = new EventEmitter<string>();

  circleobjs = [
    { cx: 525, cy: 525, r: 470 },
    { cx: 525, cy: 525, r: 370 },
    { cx: 525, cy: 525, r: 270 },
    { cx: 525, cy: 525, r: 170 },
    { cx: 525, cy: 525, r: 70 },
    { cx: 525, cy: 525, r: 0 }
  ];

  constructor(private http: Http, private fileFactory: FileFactory, private moreaction: MoreActionsPopover) { }

  navigate(ev) {
    this.onNavigate.emit(ev);
  }
  isPlay: boolean = false;
  resultsobjects = [];
  onRun() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      setTimeout(() => {
      this.http.get('assets/jsonfiles/data.json')
        .map((res) => res.json())
        .subscribe(data => {
          if (!MoreActionsPopover.isRunAllenabled) {
            this.resultsobjects = [];
            var item = data.response.data.results[this.selectedVehicleIndex];
            this.resultsobjects.push(item);
          }
          else {
            this.resultsobjects = [];
            this.resultsobjects = data.response.data.results;
          }
        }, (rej) => { console.error("Could not load local data", rej) });
        this.isPlay = false;
      }, 2000);      
    }    
  }
  isTargetposAvailable: boolean = false;

  selectAv() {
    this.isTargetposAvailable = !this.isTargetposAvailable;
  }

  ngAfterViewInit() {
    this.onResize(event);

    this.http.get('assets/jsonfiles/data.json')
      .map((res) => res.json())
      .subscribe(data => {
        var results = data.response.data.results;
        results.forEach(element => {
          var item = { "item": "1" }
          this.resultsobjects.push(item);
        });
      }, (rej) => { console.error("Could not load local data", rej) });
  }

  isPortrait: boolean = true;
  onResize(event) {
    if (window.innerHeight > window.innerWidth) {
      this.isPortrait = true;
    }
    else if (window.innerHeight < window.innerWidth) {
      this.isPortrait = false;
    }
  }

  getY(lat, lon) {
    var containerMid = 525;
    var radius = 470;
    var objectsize = 30;
    var rad2deg = Math.PI / 180;
    var lony = (lat * (2 * radius) / 180)
    return containerMid - lony * (Math.cos(lon * rad2deg)) - (objectsize / 2);
  }

  getX(lat, lon) {
    var containerMid = 525;
    var radius = 470;
    var objectsize = 30;
    var rad2deg = Math.PI / 180;
    var latx = radius * Math.sin(lon * rad2deg);
    return containerMid + latx - (objectsize / 2);
  }

  selectedVehicleIndex = 0;

  onVehicleClick(index) {
    this.selectedVehicleIndex = index;
  }
}
