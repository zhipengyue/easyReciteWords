webpackJsonp([6],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__contact__["a" /* ContactPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__contact__["a" /* ContactPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__contact__["a" /* ContactPage */]]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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





//import { Token } from '../../common/token';
var ContactPage = (function () {
    function ContactPage(navCtrl, rest, toastCtrl) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.toastCtrl = toastCtrl;
        this.displayMode = 'login';
        this.user = {
            userName: '',
            password: '',
            email: '',
            avalidateCode: ''
        };
        this.avalidateCode = '';
    }
    ContactPage.prototype.createAccountPage = function ($event) {
        this.displayMode = 'regist';
    };
    ContactPage.prototype.loginPage = function ($event) {
        this.displayMode = 'login';
    };
    ContactPage.prototype.avalidateAccount = function ($event) {
        var that = this;
        this.displayMode = 'avalidate';
        this.rest.avalidateAccount(this.user)
            .subscribe(function (res) {
            if (!res['error']) {
                that.avalidateCode = res['data'];
            }
        });
    };
    ContactPage.prototype.activity = function ($event) {
        var _this = this;
        var that = this;
        if (this.avalidateCode === this.user['avalidateCode']) {
            var toast = that.toastCtrl.create({
                message: '恭喜！激活成功,请您登录',
                duration: 3000,
                position: 'top',
                cssClass: 'toastBg'
            });
            toast.present();
            this.rest.createAccount(this.user)
                .subscribe(function (res) {
                if (!res['error']) {
                    //console.log(res)
                    _this.displayMode = 'login';
                }
            });
        }
    };
    ContactPage.prototype.login = function ($event) {
        var that = this;
        this.rest.login(this.user)
            .subscribe(function (res) {
            if (!res['error']) {
                if (res['token']) {
                    var toast = that.toastCtrl.create({
                        message: '登录成功',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'toastBg'
                    });
                    toast.present();
                    var token = res['token'];
                    that.rest.token = token;
                    that.displayMode = 'logined';
                }
            }
        });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      登录\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="displayMode==\'login\'">\n  <ion-item>\n    <ion-label fixed>用户名</ion-label>\n    <ion-input type="text" [(ngModel)]="user.userName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>密码</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="login($event)">登录</button>\n  <button ion-button block>忘记密码</button>\n  <button ion-button block (click)="createAccountPage($event)">创建账户</button>\n</ion-list>\n<ion-list *ngIf="displayMode==\'regist\'">\n  <ion-item>\n    <ion-label fixed>昵称</ion-label>\n    <ion-input type="userName" [(ngModel)]="user.userName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>密码</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>邮箱</ion-label>\n    <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n  <button ion-button block (click)="avalidateAccount($event)">创建账户</button>\n  <button ion-button block (click)="loginPage($event)">登录页面</button>\n</ion-list>\n\n<ion-list *ngIf="displayMode==\'avalidate\'">\n  <ion-card>\n    <ion-card-header>\n    </ion-card-header>\n    <ion-card-content>\n      请将发至您邮箱的秘钥填写在下面的输入框内，以完成注册\n    </ion-card-content>\n  </ion-card>\n  <ion-item>\n    <ion-label fixed>激活秘钥</ion-label>\n    <ion-input type="text" [(ngModel)]="user.avalidateCode"></ion-input>\n  </ion-item>\n  <button ion-button block (click)="activity($event)">激活</button>\n</ion-list>\n\n<ion-list *ngIf="displayMode==\'logined\'">\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/logo.png">\n    </ion-thumbnail>\n    <h2>{{user.userName}}</h2>\n  </ion-item>\n  <button ion-button block (click)="activity($event)">退出登录</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pengyuezhi/Desktop/我的应用/记单词/easyReciteWords/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest__["a" /* Rest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest__["a" /* Rest */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _c || Object])
], ContactPage);

var _a, _b, _c;
//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=6.js.map