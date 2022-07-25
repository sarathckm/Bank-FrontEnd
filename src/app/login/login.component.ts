import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Your perfect banking partner.....'
  account='Enter your account number here...'
  acno=''
  pswd=''

  userDetails:any={
    1000:{acno:1000,username:'Neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:4000},
    1002:{acno:1002,username:'Neer',password:1002,balance:6000}

  }

  constructor() { }

  ngOnInit(): void {
  }
  // login(){
  //   alert("login clicked...")
  // }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  // login(){
  //   var acno=this.acno
  //   var pswd=this.pswd
  //   let userDetails=this.userDetails

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login Successful')
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //     }
  //     else{
  //       alert("user does not exist")
  //     }
  //   }
  // login with 2 args
    login(a:any,p:any){
      var acno=a.value
      var pswd=p.value
      let userDetails=this.userDetails
  
      if(acno in userDetails){
        
        if(pswd == userDetails[acno].password){
          alert('Login Successful')
        }
        else{
          alert("incorrect password")
        }
        }
        else{
          alert("user does not exist")
        }
      }
  }



