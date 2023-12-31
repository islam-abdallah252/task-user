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
  loading: boolean = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.searchKeyWord.subscribe((value: any) => {
      if (value != '') {
        this.usersFilter = value;
        this.search(value);
      } else {
        this.getUsers();
      }
    });
  }

  getUsers(page = 1, newRequest = false) {
    this.loading = true;
    this.subscription = this.usersService
      .getAll(page, newRequest)
      .subscribe((users: any) => {
        setTimeout(() => {
          this.loading = false;
          if (users.data) {
            this.users = users.data;
            this.setConfigPagination(users);
          }
        }, 1000);
      });
  }

  search(keyword: any) {
    this.loading = true;
    this.subscription = this.usersService.searchInUsers(keyword).subscribe({
      next: (suc) => {
        setTimeout(() => {
          this.loading = false;
          if (suc.data) {
            this.users = [];
            this.users.push(suc.data);
            this.setConfigPagination(suc);
          }
        }, 1000);
      },
      error: (err) => {
        this.users = [];
        this.loading = false;
      },
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
