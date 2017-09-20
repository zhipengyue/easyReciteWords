webpackJsonp([3],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciteWordsModule", function() { return ReciteWordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reciteWordsSetting__ = __webpack_require__(272);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_1__reciteWordsSetting__["a" /* ReciteWordsSettingPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__reciteWordsSetting__["a" /* ReciteWordsSettingPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__reciteWordsSetting__["a" /* ReciteWordsSettingPage */]]
    })
], ReciteWordsModule);

//# sourceMappingURL=reciteWordsSetting.module.js.map

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

/***/ })

});
//# sourceMappingURL=3.js.map