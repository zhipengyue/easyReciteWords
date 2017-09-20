
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Token {
    token=null
    tokenstr=''
    constructor(){
        if(!this.token){
            this.token=new Token()
        }else{
            return this.token
        }
    }
    setToken(token){
        this.tokenstr=token
    }
    getToken(){
        return this.tokenstr
    }
}