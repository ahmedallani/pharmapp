import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http : HttpClient
  url = 'http://localhost:8000/api/auth/login'
  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }
  login(username: string, password: string){
   const user={
     username: username,
      password: password
  }
   return this.http.post(this.url, user)
  }
}
