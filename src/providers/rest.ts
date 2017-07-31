import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  private apiUrl = 'http://192.168.2.110:3000/';

  constructor(public http: Http) {}

  translate(content,fromcode,tocode):Observable<string[]>{
    let body={
      q:content,
      from:fromcode,
      to:tocode,
      salt:(new Date).getTime(),
      index:0,
      size:10
    }    
    return this.http.post(this.apiUrl+'translate',body)
          .map(this.extractData)
          .catch(this.handleError);

    /*let sign=md5(appid+q+salt+code)
    */
    //console.log(body)
    //this.http.post(this.apiUrl,body)
            //.catch(this.getTranslateError);
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
      console.error(errMsg);
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
