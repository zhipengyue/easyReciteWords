import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { ToastController } from 'ionic-angular';
//import { Token } from '../../common/token';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  displayMode='login';
  user={
    userName:'',
    password:'',
    email:'',
    avalidateCode:''
  }
  avalidateCode=''
  constructor(public navCtrl: NavController,public rest: Rest,public toastCtrl: ToastController) {

  }

  createAccountPage($event){
    this.displayMode='regist'
  }
  loginPage($event){
    this.displayMode='login'
  }
  avalidateAccount($event){
    let that=this
    this.displayMode='avalidate'
    this.rest.avalidateAccount(this.user)
    .subscribe(res=> {
      if(!res['error']){
         that.avalidateCode=res['data']
      }
    });
  }
  activity($event){
    let that=this
    if(this.avalidateCode===this.user['avalidateCode']){
        let toast = that.toastCtrl.create({
            message:'恭喜！激活成功,请您登录',
            duration: 3000,
            position: 'top',
            cssClass:'toastBg'
        });      
        toast.present();

        this.rest.createAccount(this.user)
        .subscribe(res=>{
          if(!res['error']){
            //console.log(res)
            this.displayMode='login';
          }
        })
    }
  }
  login($event){
      let that=this
      this.rest.login(this.user)
        .subscribe(res=>{
          if(!res['error']){
            if(res['token']){
              let toast = that.toastCtrl.create({
                  message:'登录成功',
                  duration: 3000,
                  position: 'top',
                  cssClass:'toastBg'
              });      
              toast.present();
              let token=res['token']
              that.rest.token=token
              that.displayMode='logined'
            }

          }
        })
  }

}
