import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [
  {  username: 'heriol', password: 'heriol' },
  {  username: 'valdo', password: 'valdo' },
  
  ];

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

}