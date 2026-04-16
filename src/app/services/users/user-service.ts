import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http =inject(HttpClient);

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
