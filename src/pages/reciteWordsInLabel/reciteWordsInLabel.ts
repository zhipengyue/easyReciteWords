import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { ActionSheetController } from 'ionic-angular';

import { ModalController,NavParams} from 'ionic-angular';
import { LabelPage } from '../label/label';
import { ReciteWordsSettingPage } from '../reciteWordsSetting/reciteWordsSetting';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reciteWordsInLabel',
  templateUrl: 'reciteWordsInLabel.html'
})
export class ReciteWordsInLabelPage {
  items = [];
  voice:string='';
  params={
    index:0,
    size:10,
    labelID:0
  }
  setting={
    displayMode:false,
    displaySwither:false 
  }
  labelName='';
  constructor(public navCtrl: NavController,public rest: Rest,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController,public toastCtrl: ToastController,labelParams:NavParams) {
      console.log(labelParams)
      delete labelParams.data['component']
      delete labelParams.data['opts']
      //this.setting=labelParams.data
      this.labelName=labelParams.data['labelName']
      this.params['labelID']=labelParams.data['ID']
      this.getRecitWordsLabelList(this.params,function(){

      })
  }

  ionViewDidLoad(){
    //console.log('ionViewDidLoad')
  }
  ionViewDidEnter(){
    //this.getRecitWordsList(this.params,function(){})
  }
  playVoice(event,voiceData,mp3){
    voiceData=JSON.parse(voiceData)
    this.voice=voiceData[mp3]//['ph_en_mp3']
    let audio=new Audio()
        audio.src=this.voice
        audio.load()
        audio.play()
  }
  getRecitWordsLabelList(params,callback){
    let that=this
    this.rest.getReciteWordsInLabelByUserId(params)
    .subscribe(res=> {
      if(!res['error']&&res['data']['list']&&res['data']['list'].length>0){
          let datalist=res["data"]['list']
          let total=res['data']['total']
          if(datalist.length==that.params['size']){
              that.params['index']+=1
          }
          if(that.items.length<total){
            for(let i in datalist){
              that.items.push(datalist[i])
            }
          }
      }
        callback(res['error'])
    });
  }
  doRefresh(refresher) {
    let that=this
    this.rest.getReciteWordsInLabelByUserId({index:0,size:this.params['size'],labelID:this.params['ID']})
    .subscribe(res=> {
      if(!res['error']&&res['data']['list']&&res['data']['list'].length>0){
          that.items=res["data"]['list']
      }
      refresher.complete()
    });
  }
  pushElementNotRepeat(array,item,key){
      let result=true
      array.forEach(function(t){
          if(t[key]==item[key]){
              result=false
          }
      })
      if(result){
          array.push(item)
      }
      return array
  }
  doInfinite(infiniteScroll) {
    let that=this
     this.getRecitWordsLabelList(this.params,function(error){
       setTimeout(() => {
          infiniteScroll.complete();
       }, 500);
      
    })
  }
  multiButton(event,item){
    let that=this
    console.log(item)
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '从标签中移除',
          role: 'destructive',
          handler: () => {
            that.rest.deleteWordsFromWordsLabelList(item)
            .subscribe(res=> {
                if(!res['error']){

                  that.items.forEach((t,i)=>{
                    if(that.items[i]['ID']===item['ID']){
                       that.items.splice(i,1)
                     }
                  })
                  
                  let toast = that.toastCtrl.create({
                      message:'成功删除',
                      duration: 3000,
                      position: 'top',
                      cssClass:'toastBg'
                  });
                  toast.present();
                }
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
  labelPage(event){
      /*let modal = this.modalCtrl.create(LabelPage);
      modal.present();*/
      this.navCtrl.push('LabelPage');
  }
  labelPageSetting(event){
    let that=this
    let modal=this.modalCtrl.create(ReciteWordsSettingPage,this.setting);
    modal.onDidDismiss(data => {
      that.setting=null
      that.setting=data
    });
    modal.present();
  }
  checkTheTranslate($event,item){
    let that=this
    let toast = that.toastCtrl.create({
          message:item['means'],
          duration: 3000,
          position: 'top',
          cssClass:'toastBg'
      });
      toast.present();
  }
}
