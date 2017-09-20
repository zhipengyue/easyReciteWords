import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ModalController, NavParams,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'reciteWordsSetting.html'
})
export class ReciteWordsSettingPage {

  setting={
  }
  constructor(public viewCtrl: ViewController,setting:NavParams) {
    console.log(setting)
    delete setting.data['component']
    delete setting.data['opts']
    this.setting=setting.data
  }
  backPage($event){
    this.viewCtrl.dismiss(this.setting);
  }
}
