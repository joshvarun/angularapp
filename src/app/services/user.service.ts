import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2012 08:00:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@email.com',
        registered: new Date('04/04/2012 08:56:00'),
        hide: true
      },
      {
        firstName: 'Joe',
        lastName: 'Bloggs',
        email: 'joe@email.com',
        registered: new Date('07/01/2012 14:00:00'),
        hide: true
      }
    ];

   }


   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
