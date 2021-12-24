import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  url="./assets/user.json";

  getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.url);
  }
}