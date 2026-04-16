import  { UserInterface } from './../../models/user';
import { UserService } from './../../services/users/user-service';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList  implements OnInit {
  usersList: UserInterface[] = [];
  UserService = inject(UserService);
  private cdr = inject(ChangeDetectorRef);
  loadingUsers: boolean = false;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.loadingUsers = true;
    this.UserService.getUsers().subscribe(
      {
        next: (result: any) => {
          this.usersList = result;
          this.loadingUsers = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log(err);
          this.loadingUsers = false;
          this.cdr.detectChanges();
        },
      }
    )
  }
}
