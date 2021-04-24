import { Component, OnInit } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData;

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
// check this after connecting api key (syntax may be wrong)
    // this.apiService.getData().subscribe((data)=>{
    //   console.log(data);
    //   this.userData = data['userData'];
    // });
  }

  async test() {
    const testObject = {
      username: "testUser4",
      password: "PassAgain"
    };
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(testObject)
  };
    const request = await fetch("http://localhost:8080/user", settings);
    console.log("success");
  }

}
