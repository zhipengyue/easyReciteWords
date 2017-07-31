import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  translate={
    from:{
      code:'zh',
      text:'中文'
    },
    to:{
      code:'cn',
      text:'英文'
    }
  }
  content:string='';
  resultList: string[];
  errorMessage: string;
  voice:string='';
  constructor(public navCtrl: NavController, public rest: Rest) {

  }
  toggleSourceAndTarget(event){
    let from=this.translate.to
    let to=this.translate.from
    this.translate.from=from
    this.translate.to=to
  }
  translateHandle(event){
    let that=this
    this.rest.translate(this.content,this.translate.from.code,this.translate.to.code)
    .subscribe(res=> {
      if(!res['error']){
        let datalist=res["data"]
        that.resultList=datalist
      }
        
    });
  }
  playVoice(event,voiceData){
    voiceData=JSON.parse(voiceData)
    this.voice=voiceData['ph_tts_mp3']//['ph_en_mp3']
    let audio=new Audio()
        audio.src=this.voice
        audio.load()
        audio.play()
  }
  resetInputArea(event){
      this.resultList=[]
      this.content=''
  }
  ionViewDidLoad() {
    //this.getCountries();
  }

  /*getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }*/

}
