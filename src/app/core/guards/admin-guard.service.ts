import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //check isloggedin
    if (this.authService.isLoggedIn() && this.authService.isAdmin()){
      //check if it has role of admin
      return true;
      
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
