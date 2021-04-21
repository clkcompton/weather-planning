import { Component, OnInit } from '@angular/core';
import { TestQueryClass } from '../../../script';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TestQueryClass]
})
export class LoginComponent implements OnInit {

  constructor(private service: TestQueryClass) { }
  test() {
    window.alert('hello');
    this.service.testQuery();
   }

  ngOnInit() {

    // test() {
    //  window.alert('hello');
    // // this.service.testQuery();
    // }
  }

}
