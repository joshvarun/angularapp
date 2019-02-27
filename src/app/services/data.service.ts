import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        isActive: true,
        registered: new Date('01/02/2012 08:00:00'),
        hide: true
      },
      {
        firstName: 'Varun',
        lastName: 'Joshi',
        email: 'varun@email.com',
        registered: new Date('04/04/2012 08:56:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Smith',
        email: 'karen@email.com',
        registered: new Date('07/01/2012 14:00:00'),
        hide: true
      }
    ];

   }


   getUsers(): User[] {
     return this.users;
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
