import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  domain = environment.url;
  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn(){
    if(sessionStorage.getItem('token')){
     
      return true
    }
    else{
      
      return false
    }
  }
  MAKE_SIGNUP(obj:any){
    return this.http.post(this.domain + 'MAKE_SIGNUP',obj);
  }
  GENERATE_OTP(obj:any){
    return this.http.post(this.domain + 'GENERATE_OTP',obj)
  }
  VALIDATE_OTP(obj:any){
    return this.http.post(this.domain + 'VALIDATE_OTP', obj)
  }
  UPDATE_USER_VERIFY(obj:any){
    return this.http.get(this.domain + 'UPDATE_USER_VERIFY?Profile='+obj.ProfileId);
  }
  LOGIN_SIGNUP(obj:any){
    return this.http.post(this.domain + 'LOGIN_SIGNUP',obj);
  }
  getPassportIdentity(obj:any){
    return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/identities', obj,this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
  }                        
  ExtractPassport(obj:any){
    return this.http.post('https://signzy.tech/api/v2/snoops',obj);
  }
  VerifyPassport(obj:any){
    return this.http.post('https://signzy.tech/api/v2/snoops',obj);
  
  }
  UPLOAD_DOC(obj:any){
    return this.http.post(this.domain +'UPLOAD_KYC_DOC', obj);
  }
  getSWIFTdetails(obj:any){
    return this.http.get('https://api.apilayer.com/bank_data/swift_check?swift_code='+ obj,this.swiftHeaders()).pipe(map(res=>{return res}))
  }
  swiftHeaders(){
    let headers = new HttpHeaders({
      // 'Content-Type' : 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      'apikey': `${'I1aSgxybXQGF6QAhMXm91pDMMtcbk7Qm'}`,
     });
     let options = {
        headers: headers
     }
     return options
  }
  ADD_USER_BANK(obj:any)
{
  return this.http.post(this.domain +'ADD_USER_BANK', obj);
}



GET_USER_KYC_INFO(obj:any){
  return this.http.post(this.domain + 'GET_USER_KYC_INFO',obj )
}


createAuthenticationHeaders()
{


 
      let headers = new HttpHeaders({
        // 'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `${'dxzZBE905Hea1pc7MLdQDYvKUSA0he1rhZRQt83WlwBdC7Xqla4MQPPqC3heaTKj'}`,
       });
       let options = {
          headers: headers
       }
       return options
     }

     USER_RESET_LINK(obj:any){
      return this.http.post(this.domain + 'USER_RESET_LINK',obj );
     }
     USER_RESET_PASSWORD(obj:any){
      return this.http.post(this.domain + 'USER_RESET_PASSWORD',obj );
     }
     CHANGE_USER_PASSWORD(obj:any){
      return this.http.post(this.domain + 'CHANGE_USER_PASSWORD',obj );
     }
     GET_USER_BANK(obj:any){
      return this.http.get(this.domain + 'GET_USER_BANK?Key='+obj.key+ '&Profile=' + obj.Profile);
    }
    GET_USER_INFO(obj:any){
      return this.http.get(this.domain + 'GET_USER_INFO?Profile=' + obj.Profile);
    }
    UPDATE_PROFILE_ADDR_DOB(obj:any){
      return this.http.post(this.domain + 'UPDATE_PROFILE_ADDR_DOB',obj );
    }
    GET_USER_ACCOUNT_BY_COUNTRY(obj:any){
      return this.http.get(this.domain + 'GET_USER_ACCOUNT_BY_COUNTRY?Key='+obj.key+ '&Country=' + obj.country);
    }

}
