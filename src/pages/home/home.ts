import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LabelPage } from '../label/label';
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
  index:number=0;
  size:number=10
  resultList: string[];
  errorMessage: string;
  voice:string='';
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public rest: Rest,public alertCtrl: AlertController) {

  }
  toggleSourceAndTarget(event){
    let from=this.translate.to
    let to=this.translate.from
    this.translate.from=from
    this.translate.to=to
  }
  translateHandle(event){
    let that=this
    this.rest.translate({content:this.content,from:this.translate.from.code,to:this.translate.to.code,index:this.index,size:this.size})
    .subscribe(res=> {
      if(!res['error']){
        let datalist=res["data"]
        that.resultList=datalist
        that.index+=1
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
  addwords(event,item){
    let that=this
    /**/
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '加入生词本',
          handler: () => {
            that.addToRectiWords(item)
          }
        },{
          text: '加入标签',
          handler: () => {
            that.navCtrl.push('LabelPage',{
              dealWidth:'add',
              item:item
            });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  addToRectiWords(item){
    let that=this
    this.rest.addWordsToList(item)
    .subscribe(res=> {
      if(!res['error']){
          let alert = that.alertCtrl.create({
              title: item.word,
              subTitle: '成功加入生词本',
              buttons: ['确认']
          });
          alert.present();
      }else{
          let alert = that.alertCtrl.create({
              title: item.word,
              subTitle: res['error'],
              buttons: ['确认']
          });
          alert.present();
      }
    });
  }
  resetInputArea(event){
      this.resultList=[]
      this.content=''
  }
  ionViewDidLoad() {
    //this.getCountries();
  }
  doInfinite(infiniteScroll) {
    let that=this
    this.rest.translate({content:this.content,from:this.translate.from.code,to:this.translate.to.code,index:this.index,size:this.size})
    .subscribe(res=> {
      if(!res['error']){
        let datalist=res["data"]
        for(let i in datalist){
          that.resultList=that.pushElementNotRepeat(that.resultList,datalist[i],'id')
        }
        that.index+=1
        infiniteScroll.complete();
      }else{
        console.log(res)
        infiniteScroll.complete();
      }
        
    });
    
  }
  pushElementNotRepeat(array,item,key){
      let result=true
      array.forEach(function(t){
          if(t[key]==item[key]){
              result=false
              for(let i in item){
                  if(i!=='childList'){
                      t[i]=item[i]
                  }
              }
          }
      })
      if(result){
          array.push(item)
      }
      return array
  }
  /*getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }*/

}
