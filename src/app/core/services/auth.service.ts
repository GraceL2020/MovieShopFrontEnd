import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { JwtStorageService } from './jwt-storage.service';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  constructor(private apiService:ApiService, private jwtStorageService:JwtStorageService) { }

  login(userLogin: Login): Observable<boolean>{
    return this.apiService.create('account/login',userLogin).pipe(
      map( response=>{
        if(response){
          this.jwtStorageService.saveToken(response.token);
          return true;
        }
        return false;

      })
    );
  }

  logout(){
    //clear the Jwt Token
    this.jwtStorageService.destroyToken();
  }

  //decode token to get the user information from token payload
  private decodeToken():User{

    const token = this.jwtStorageService.getToken();
    if(!token || new JwtHelperService().isTokenExpired(token))
    {
      this.logout();
      return null;
    }

    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  isLoggedIn():boolean{
    const token = this.jwtStorageService.getToken();
    if(!token || new JwtHelperService().isTokenExpired(token))
    {
      return false;
    }
    return true;
  }

  isAdmin():boolean{
    //check tokens whether it has admin role
    this.decodeToken();
    if(this.user.role.indexOf('admin')>-1){
      return true;
    }
      
    return false;
  }

  //get first and last name
  getUserFullName():string{
    
    this.decodeToken();
    //console.log(this.user.role);
    if (this.user != null)
      return this.user.given_name+" "+this.user.family_name;
    return "";
    /*
     if (this.decodeToken != null) {
      const decodedData =  this.decodeToken();
      const userFullName = decodedData.family_name + ' ' + decodedData.given_name;
      return userFullName;
    }
    */  
  }
}
