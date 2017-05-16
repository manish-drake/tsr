import { Component, ViewChild, ElementRef } from '@angular/core';
import { Content } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/ui/home.service';
import { LocalStorage } from '../../services/storage/local-storage';

@Component({
  selector: 'page-antenna',
  templateUrl: 'antenna.html'
})
export class AntennaComp {

  @ViewChild('groupContent') groupContent: ElementRef;

  gContent: HTMLDivElement;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _svcHome: HomeService,
    private content: Content,
    private _localStorage: LocalStorage
  ) { }

  titleName: string;

  ngOnInit() {
    this.gContent = this.groupContent.nativeElement;  
    this.route.params.subscribe(param => {
      this.titleName = (param as any).name;
      this._svcHome.title = (param as any).name;
    });
  }

  private clicks = 0;
  doubleTapNavigation() {
    this.clicks++;
    if (this.clicks == 1) {
      setTimeout(() => {
        if (this.clicks == 2) {
          this.openRequiredAvationMode()
        }
        this.clicks = 0;
      }, 500);
    }
  }

  openRequiredAvationMode(){
    var aviationmode = this._localStorage.GetItem(this._localStorage.keyForAviationMode());
    if(aviationmode == null || aviationmode == undefined){
      this._router.navigate(['aviation-cal',this.titleName]);
    }
    else{
      this._router.navigate([aviationmode,this.titleName]);
    }
  }
  


  // Code to show more
  isScrollAvailable: boolean = false;

  onResize(event) {
    this.contentForMore();
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.contentForMore();
    }, 150);
  }

  contentForMore() {
    this.content.resize();
    if (this.gContent.scrollHeight > this.content.contentHeight) {
      var st = Math.max(this.gContent.scrollTop, this.content.scrollTop);
      if ((st + this.content.contentHeight) >= this.gContent.scrollHeight) {  // if scroll bar reach bottom
        this.isScrollAvailable = false;
      } else {
        this.isScrollAvailable = true;
      }
    }
    else if (this.gContent.scrollHeight <= this.content.contentHeight) {
      this.isScrollAvailable = false;
    }
  }

}
