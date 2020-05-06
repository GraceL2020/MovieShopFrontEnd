import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged : boolean;
  fullName : string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn();
    if(this.isLogged){
      this.fullName = this.authService.getUserFullName();
    }
  }

}
