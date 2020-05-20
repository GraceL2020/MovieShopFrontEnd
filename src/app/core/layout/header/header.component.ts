import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {

  isLogged:boolean;
  fullName : string;
  constructor(public authService: AuthService,private router:Router) { }
  

  ngOnInit(): void {
  }

  ngDoCheck():void{
    if(this.authService.isLoggedIn()){
      this.fullName = this.authService.getUserFullName();
    }
  }

  login(){   
    this.router.navigate(["login"]);
  }
  logout(){
    this.authService.logout();
    //console.log(this.authService.isLoggedIn());
  }

}
