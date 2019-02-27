import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild("userForm") form: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@email.com",
        isActive: true,
        registered: new Date("01/02/2012 08:00:00"),
        hide: true
      },
      {
        firstName: "Varun",
        lastName: "Joshi",
        email: "varun@email.com",
        registered: new Date("04/04/2012 08:56:00"),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "Smith",
        email: "karen@email.com",
        registered: new Date("07/01/2012 14:00:00"),
        hide: true
      }
    ];

    this.loaded = true;
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log("submit");
    if (!valid) {
      console.log("Invalid form");
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
