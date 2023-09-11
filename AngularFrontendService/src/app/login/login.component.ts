import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  password : string='';
  errorMessage = 'Invalid Credentials';
  successMessage: string='';
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> 

    {
      console.log(result)
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      console.log('Login Successful.')
      this.router.navigate(["/calculator"])
     
    },error => {
            // Handle login error, e.g., show error message
            if (error.status === 401) {
              console.error('Login failed: Invalid credentials');
                  this.invalidLogin = true;
                  this.loginSuccess = false;
              // Handle invalid credentials error
            } else {
              
              console.error('Login error:', error);
              // Handle other errors
            }
          }     
    );}
}