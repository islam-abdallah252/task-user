import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: IUser[] = {} as IUser[];
  subscription: Subscription = new Subscription();

  configPagination: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
  } = {
    total: 6,
    page: 1,
    per_page: 6,
    total_pages: 12,
  };
  usersFilter: string = '';
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(page = 1, newRequest = false) {
    this.subscription = this.usersService
      .getAll(page, newRequest)
      .subscribe((users: any) => {
        if (users.data) {
          this.users = users.data;
          this.setConfigPagination(users);
        }
      });
  }

  setConfigPagination(users: any) {
    this.configPagination = {
      total: users.total,
      page: users.page,
      per_page: users.per_page,
      total_pages: users.total_pages,
    };
  }
  changePage(page: any) {
    this.configPagination.page = page.pageIndex;
    this.getUsers(page.pageIndex + 1, true);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
