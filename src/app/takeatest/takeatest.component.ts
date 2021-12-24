import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './takeatest.component.html',
  styleUrls: ['./takeatest.component.css']
})
export class TakeatestComponent implements OnInit {

  constructor(private service:TestService) { }

  users:User[]=[];
  ngOnInit(): void {
    this.service.getUsers().subscribe(res=>this.users=res);
  }
  
  

}

