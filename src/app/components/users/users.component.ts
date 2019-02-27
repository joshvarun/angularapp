import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log('submit');
    if (!valid) {
      console.log('Invalid form');
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
}
