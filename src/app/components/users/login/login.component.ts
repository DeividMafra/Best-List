import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public men = [
    {
      firstName: "Deivid",
      lastName: "Mafra",
      age: 33
    },
    {
      firstName: "Ana",
      lastName: "Mafra",
      age: 34
    }];

  public child = {
    firstName: "Arthur",
    lastName: "Mafra",
    age: 5
  }

  constructor() { }

  ngOnInit() {
    console.table(this.men);
    console.log(this.child)
  }


}
