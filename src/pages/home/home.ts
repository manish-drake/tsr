import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HeaderService } from '../../services/ui/header.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  Title: string = "Title";

  constructor(public navCtrl: NavController,private _svcHeader: HeaderService) { }

  ngOnInit(){
    this._svcHeader.TitleUpdated.subscribe(e =>{
      this.Title = e.title;
    })
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }

}
