import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    // console.log(e);
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username,password);
    // return false;

    if(username ==='austin' && password ==='austin') {
      this.router.navigate(['/dashboard']);
      }
    }
  }
