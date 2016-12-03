import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../detail/detail';
import { Master } from '../../services/test-set/master.service'
import { Dictionary } from '../../common/dictionary'
import { HeaderService } from '../../services/ui/header.service'

/*
  Generated class for the Sections page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sections',
  templateUrl: 'sections.html'
})
export class SectionsPage implements OnInit {
  testData: string;
  constructor(private master: Master, private _svcHeader: HeaderService) { }

  ngOnInit(){
      this._svcHeader.title = "Sections";
      console.log("Section init called");
      this.testData = JSON.parse(this._svcHeader.getTextContents("")).Script;
      console.log(this.testData);
  }

  ionViewDidLoad() {
    console.log('Hello SectionsPage Page');

    var dic = new Dictionary<string, string>();
    dic.add("a","1");
    dic.add("b","2");
    dic.add("c","3");
    this.master.runTest("ads-b", dic);    
  }

  openDetail() {
    // Reset the NavController to have just this page
    // we wouldn't want the back button to show in this scenario

  }

}
