import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/ui/header.service'

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(private _svcHeader: HeaderService, private route: ActivatedRoute) {}

  ngOnInit(){
      this._svcHeader.title = "Detail";
      console.log("Detail init called");
      this.route.params.subscribe(data => {
        console.log(data);
      })
  }
  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
