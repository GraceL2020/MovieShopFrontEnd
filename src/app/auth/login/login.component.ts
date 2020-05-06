import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    "password":"", "email":""
  };
  invalidLogin: boolean;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.userLogin).subscribe(
      (response) =>{
        if(response){
          //navigate to home page
          this.router.navigate(["/"]);
        }
        else{
          this.invalidLogin = true;
        }
      }
    );
  }

  

}
