import { Component, OnInit } from "@angular/core";
import { User } from '../../models/User';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;


  constructor() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      age: 24,
      address: {
        street: "Ovalnest",
        city: "Pune",
        state: "MH"
      }
    };
  }

  ngOnInit() {}
}


