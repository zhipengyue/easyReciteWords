import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Md5} from "ts-md5/dist/md5";
/*
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  private apiUrl = 'http://192.168.2.110:3000/';
  public token=''
  constructor(public http: Http) {}

  translate(item):Observable<string[]>{
    let body={
      q:item.content,
      from:item.from,
      to:item.to,
      salt:(new Date).getTime(),
      index:item.index,
      size:item.size,
      token:this.token
    }    
    return this.http.post(this.apiUrl+'translate',body)
          .map(this.extractData)
          .catch(this.handleError);
  }
  addWordsToList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'addWordsToList',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  getReciteWordsList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'getReciteWordsList',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  deleteWordFromReciteWordsList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'deleteWordFromReciteWordsList',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  addLabel(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'addLabelByUserId',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  getLabelList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'getLabelListByUserId',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  addWordsToWordsLabelList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'addWordsToWordsLabelList',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  getReciteWordsInLabelByUserId(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'getReciteWordsInLabelByUserId',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  deleteWordsFromWordsLabelList(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'deleteWordsFromWordsLabelList',item)
          .map(this.extractData)
          .catch(this.handleError);
  }

  avalidateAccount(item):Observable<string[]>{
    item['token']=this.token
    return this.http.post(this.apiUrl+'avalidateAccount',item)
          .map(this.extractData)
          .catch(this.handleError);
  }
  createAccount(item):Observable<string[]>{
    let tempdata={}
    for(let i in item){
      tempdata[i]=item[i]
    }
    tempdata['password']=Md5.hashStr(item['password'])
    item['token']=this.token
    return this.http.post(this.apiUrl+'createAccount',tempdata)
    .map(this.extractData)
    .catch(this.handleError)
  }
  login(item):Observable<string[]>{
    let tempdata={}
    for(let i in item){
      tempdata[i]=item[i]
    }
    tempdata['password']=Md5.hashStr(item['password'])
    return this.http.post(this.apiUrl+'login',tempdata)
    .map(this.extractData)
    .catch(this.handleError)
  }
  private getTranslateError(error: Response | any){
    let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
  }
  /*getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  

}
