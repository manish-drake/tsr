import { Component, ViewChild, ElementRef } from '@angular/core';
import { Content } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/test-set/user.service';
import { ThemeService } from '../../services/themes/themes.service';
import { HomeService } from '../../services/ui/home.service'
import { Logger } from "../../services/logging/logger";

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupComp {

  @ViewChild('groupContent') groupContent: ElementRef;

  gContent: HTMLDivElement;

  constructor(
    private content: Content,
    private route: ActivatedRoute,
    private _router: Router,
    private _svcUser: UserService,
    private _svcTheme: ThemeService,
    private _svcHome: HomeService,
    private _logger: Logger) { }

  titleName: string;
  currentUser: any;
  currentTheme: any;
  isScrollAvailable: boolean = false;

  ngOnInit() {
    this.gContent = this.groupContent.nativeElement;
    this.route.params.subscribe(param => {
      this.titleName = (param as any).name;
      this._svcHome.title = (param as any).name;
    });
    this._svcUser.getCurrentUser().subscribe(val => this.currentUser = val);
    this._svcTheme.getTheme().subscribe(val => this.currentTheme = val);
  }

  openDetail(e) {
    this._router.navigate([e, this.titleName]);
  }

  // Code to show more
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
