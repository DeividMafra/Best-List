import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor(private usrService: UsersService) { }

  ngOnInit() {
    this.usrService.getUsers().subscribe(
      // clients => console.log("The list of clients: >>>", clients)
      users => {
        this.users = users;
        console.table(this.users)
      });
  }

}
