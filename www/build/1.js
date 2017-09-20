webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciteWordsModule", function() { return ReciteWordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reciteWords__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReciteWordsModule = (function () {
    function ReciteWordsModule() {
    }
    return ReciteWordsModule;
}());
ReciteWordsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__reciteWords__["a" /* ReciteWordsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__reciteWords__["a" /* ReciteWordsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__reciteWords__["a" /* ReciteWordsPage */]]
    })
], ReciteWordsModule);

//# sourceMappingURL=reciteWords.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReciteWordsSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReciteWordsSettingPage = (function () {
    function ReciteWordsSettingPage(viewCtrl, setting) {
        this.viewCtrl = viewCtrl;
        this.setting = {};
        console.log(setting);
        delete setting.data['component'];
        delete setting.data['opts'];
        this.setting = setting.data;
    }
    ReciteWordsSettingPage.prototype.backPage = function ($event) {
        this.viewCtrl.dismiss(this.setting);
    };
    return ReciteWordsSettingPage;
}());
ReciteWordsSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/reciteWordsSetting/reciteWordsSetting.html"*/'<ion-header>\n  <ion-navbar>\n\n\n    <ion-title>显示设置</ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n\n  <ion-item>\n    <ion-label>将中文作为主要显示</ion-label>\n    <ion-toggle [(ngModel)]="setting.displayMode"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>是否显示释义</ion-label>\n    <ion-toggle [(ngModel)]="setting.displaySwither"></ion-toggle>\n  </ion-item>\n\n</ion-list>\n<button ion-button full (click)="backPage($event)">返回</button>\n</ion-content>'/*ion-inline-end:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/reciteWordsSetting/reciteWordsSetting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ReciteWordsSettingPage);

//# sourceMappingURL=reciteWordsSetting.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReciteWordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reciteWordsSetting_reciteWordsSetting__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReciteWordsPage = (function () {
    function ReciteWordsPage(navCtrl, rest, actionSheetCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.voice = '';
        this.params = {
            index: 0,
            size: 10
        };
        this.setting = {
            displayMode: false,
            displaySwither: false
        };
    }
    ReciteWordsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    ReciteWordsPage.prototype.ionViewDidEnter = function () {
        this.getRecitWordsList(this.params, function () { });
    };
    ReciteWordsPage.prototype.playVoice = function (event, voiceData, mp3) {
        voiceData = JSON.parse(voiceData);
        this.voice = voiceData[mp3]; //['ph_en_mp3']
        var audio = new Audio();
        audio.src = this.voice;
        audio.load();
        audio.play();
    };
    ReciteWordsPage.prototype.getRecitWordsList = function (params, callback) {
        var that = this;
        this.rest.getReciteWordsList(params)
            .subscribe(function (res) {
            if (!res['error'] && res['data']['list'] && res['data']['list'].length > 0) {
                var datalist = res["data"]['list'];
                var total = res['data']['total'];
                if (datalist.length == that.params['size']) {
                    that.params['index'] += 1;
                }
                if (that.items.length < total) {
                    for (var i in datalist) {
                        that.items.push(datalist[i]);
                    }
                }
            }
            callback(res['error']);
        });
    };
    ReciteWordsPage.prototype.doRefresh = function (refresher) {
        var that = this;
        this.rest.getReciteWordsList({ index: 0, size: this.params['size'] })
            .subscribe(function (res) {
            if (!res['error'] && res['data']['list'] && res['data']['list'].length > 0) {
                that.items = res["data"]['list'];
            }
            refresher.complete();
        });
    };
    ReciteWordsPage.prototype.pushElementNotRepeat = function (array, item, key) {
        var result = true;
        array.forEach(function (t) {
            if (t[key] == item[key]) {
                result = false;
            }
        });
        if (result) {
            array.push(item);
        }
        return array;
    };
    ReciteWordsPage.prototype.doInfinite = function (infiniteScroll) {
        var that = this;
        this.getRecitWordsList(this.params, function (error) {
            setTimeout(function () {
                infiniteScroll.complete();
            }, 500);
        });
    };
    ReciteWordsPage.prototype.multiButton = function (event, item) {
        var that = this;
        console.log(item);
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: '从生词表中移除',
                    role: 'destructive',
                    handler: function () {
                        that.rest.deleteWordFromReciteWordsList(item)
                            .subscribe(function (res) {
                            if (!res['error']) {
                                that.items.forEach(function (t, i) {
                                    if (that.items[i]['ID'] === item['ID']) {
                                        that.items.splice(i, 1);
                                    }
                                });
                            }
                        });
                    }
                }, {
                    text: '添加标签',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReciteWordsPage.prototype.labelPage = function (event) {
        /*let modal = this.modalCtrl.create(LabelPage);
        modal.present();*/
        this.navCtrl.push('LabelPage');
    };
    ReciteWordsPage.prototype.labelPageSetting = function (event) {
        var that = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__reciteWordsSetting_reciteWordsSetting__["a" /* ReciteWordsSettingPage */], this.setting);
        modal.onDidDismiss(function (data) {
            that.setting = null;
            that.setting = data;
        });
        modal.present();
    };
    ReciteWordsPage.prototype.checkTheTranslate = function ($event, item) {
        var that = this;
        var toast = that.toastCtrl.create({
            message: item['means'],
            duration: 3000,
            position: 'top',
            cssClass: 'toastBg'
        });
        toast.present();
    };
    return ReciteWordsPage;
}());
ReciteWordsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reciteWords',template:/*ion-inline-start:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/reciteWords/reciteWords.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="labelPageSetting($event)">\n            <ion-icon name="ios-settings"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title>生词本</ion-title>\n    \n    <ion-buttons end>\n        <button ion-button icon-only (click)="labelPage($event)">\n            <ion-icon name="ios-albums"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list class="result">\n    <ion-item *ngFor="let c of items" class="itemList">\n      <span class="updatetime">{{c.updatetimestr}}</span>\n\n      <div class="en"><span *ngIf="!setting.displayMode">{{c.word}}</span><span *ngIf="setting.displayMode">{{c.means}}</span>\n          <span class="type">[{{c.typeen}}|{{c.typecn}}]</span>\n          <ion-icon name="ios-menu-outline" class="addbuttn" (click)="multiButton($event,c)"></ion-icon>\n      </div>\n      <span style="font-size:0.5em;">🇬🇧</span><ion-icon (click)="playVoice($event,c.voice,\'ph_en_mp3\')" class="mp3" name="ios-notifications"></ion-icon>\n      <span style="font-size:0.5em;">🇺🇸</span><ion-icon (click)="playVoice($event,c.voice,\'ph_am_mp3\')" class="mp3" name="ios-notifications"></ion-icon>\n      <div class="cn" *ngIf="setting.displaySwither&&!setting.displayMode">{{c.means}}</div>\n      <div class="cn" *ngIf="setting.displaySwither&&setting.displayMode">{{c.word}}</div>\n      <br>\n      <button ion-button *ngIf="!setting.displaySwither" (click)="checkTheTranslate($event,c)">查看释义</button>\n      \n    </ion-item>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content\n          loadingSpinner="bubbles"\n          loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/reciteWords/reciteWords.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest__["a" /* Rest */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ReciteWordsPage);

//# sourceMappingURL=reciteWords.js.map

/***/ })

});
//# sourceMappingURL=1.js.map