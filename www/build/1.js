webpackJsonp([1],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, rest) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.translate = {
            from: {
                code: 'zh',
                text: '中文'
            },
            to: {
                code: 'cn',
                text: '英文'
            }
        };
        this.content = '';
        this.voice = '';
    }
    HomePage.prototype.toggleSourceAndTarget = function (event) {
        var from = this.translate.to;
        var to = this.translate.from;
        this.translate.from = from;
        this.translate.to = to;
    };
    HomePage.prototype.translateHandle = function (event) {
        var that = this;
        this.rest.translate(this.content, this.translate.from.code, this.translate.to.code)
            .subscribe(function (res) {
            if (!res['error']) {
                var datalist = res["data"];
                that.resultList = datalist;
            }
        });
    };
    HomePage.prototype.playVoice = function (event, voiceData) {
        voiceData = JSON.parse(voiceData);
        this.voice = voiceData['ph_tts_mp3']; //['ph_en_mp3']
        var audio = new Audio();
        audio.src = this.voice;
        audio.load();
        audio.play();
    };
    HomePage.prototype.resetInputArea = function (event) {
        this.resultList = [];
        this.content = '';
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.getCountries();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/home/home.html"*/'<!--ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let c of countries">\n      <ion-avatar item-left>\n        <img src="{{c.flag}}">\n      </ion-avatar>\n      <h2>{{c.name}}</h2>\n      <p>Capital: {{c.capital}}, Region: {{c.region}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>翻译</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="top">\n    <ion-label fixed>{{translate.from.text}}</ion-label>\n      <button ion-button (click)="toggleSourceAndTarget($event)">\n        <ion-icon name="code"></ion-icon>\n      </button>\n    <ion-label fixed>{{translate.to.text}}</ion-label>\n  </div>\n  <ion-icon class="resetbtn" name="ios-close-circle-outline" (click)="resetInputArea($event)"></ion-icon>\n  <textarea name="" id="" class="content" cols="30" rows="4" [(ngModel)]="content"></textarea>\n  <button ion-button full (click)="translateHandle($event)">翻译</button>\n  <ul class="result">\n    <li *ngFor="let c of resultList">\n      <div class="en">{{c.word}} <span class="type">[{{c.typeen}}|{{c.typecn}}]</span><ion-icon (click)="playVoice($event,c.voice)" class="mp3" name="ios-notifications"></ion-icon></div>\n      <div class="cn">{{c.means}}</div>\n    </li>\n  </ul>\n</ion-content>'/*ion-inline-end:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest__["a" /* Rest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest__["a" /* Rest */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map