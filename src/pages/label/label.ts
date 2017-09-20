import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { ToastController,NavParams} from 'ionic-angular';
import { ReciteWordsInLabelPage } from '../reciteWordsInLabel/reciteWordsInLabel';
@IonicPage()
@Component({
  selector: 'page-label',
  templateUrl: 'label.html'
})
export class LabelPage {
  labelListParams={
      index:0,
      size:10
  }
  itemList=[];
  displayMode={
      selectMode:false
  }
  addToLabelItem={}
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public rest: Rest,public toastCtrl: ToastController,labelParams:NavParams) {
        console.log(labelParams)
        if(labelParams['data']['dealWidth']==='add'){
            this.displayMode['selectMode']=true
            this.addToLabelItem=labelParams['data']['item']
        }
  }
  ionViewDidEnter(){
      this.getLabelList(this.labelListParams,function(){})
  }
  addLabel(event){
    let that=this
    let prompt = this.alertCtrl.create({
        title: '创建标签',
        message: "创建一组用于标识某一类单词的标签",
        inputs: [
            {
            name: 'title',
            placeholder: '标签名字'
            },
        ],
        buttons: [
            {
                text: '取消',
                handler: data => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: '创建',
                handler: data => {
                    that.rest.addLabel(data)
                    .subscribe(res=> {
                        if(!res['error']){
                            let toast = that.toastCtrl.create({
                                message: '创建成功',
                                duration: 3000,
                                position: 'top',
                                cssClass:'toastBg'
                            });
                            toast.present();
                        }else{
                            let toast = that.toastCtrl.create({
                                message: '创建失败'+res['error'],
                                duration: 3000,
                                position: 'top',
                                cssClass:'toastWarningBg'
                            });
                            toast.present();
                        }
                    });
                }
            }
        ]
        });
        prompt.present();
  }
  getLabelList(item,callback){
      let that=this
      this.rest.getLabelList(item)
      .subscribe(res=>{
          if(!res['error']&&res['data']['list']&&res['data']['list'].length>0){
            let total=res['data']['total']

                
            let datalist=res["data"]['list']
            if(datalist.length==that.labelListParams['size']){
                that.labelListParams['index']+=1
            }
            if(that.itemList.length<total){
                for(let i in datalist){
                    that.itemList.push(datalist[i])
                }
            }
        }
        callback()
      })
  }
  doRefresh(refresher) {
    let that=this
      this.rest.getLabelList({index:0,size:10})
      .subscribe(res=>{
        if(!res['error']&&res['data']['list']&&res['data']['list'].length>0){
            that.itemList=res['data']['list']
            
        }
        refresher.complete();
      })
  }
doInfinite(infiniteScroll) {
    let that=this
     this.getLabelList(this.labelListParams,function(error){
       setTimeout(function(){
           
            infiniteScroll.complete();
       },500)
    })
  }
    getReciteWordsInLabel(event,item){
        let that=this
        if(this.displayMode.selectMode){
            console.log(item,this.addToLabelItem)
            let params={
                labelID:item['ID'],
                wordID:this.addToLabelItem['id']
            }
            this.rest.addWordsToWordsLabelList(params)
            .subscribe(res=>{
                if(!res['error']){
                    that.navCtrl.push('ReciteWordsInLabelPage',item);
                    let toast = that.toastCtrl.create({
                        message: '成功加入',
                        duration: 2000,
                        position: 'top',
                        cssClass:'toastBg'
                    });
                    toast.present();
                }else{
                    let toast = that.toastCtrl.create({
                        message: '已经有这个单词了',
                        duration: 2000,
                        position: 'top',
                        cssClass:'toastWarningBg'
                    });
                    toast.present();
                    that.navCtrl.push('ReciteWordsInLabelPage',item);
                }
            })
        }else{
            this.navCtrl.push('ReciteWordsInLabelPage',item);
        }
        
    }
}
