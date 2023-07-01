import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  user: IUser = {} as IUser;
  subscription: Subscription = new Subscription();
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getId();
  }
  getId() {
    this.route.params.subscribe((params) => {
      this.getUser(params['id']);
    });
  }

  getUser(id: any) {
    this.subscription = this.usersService.getOne(id).subscribe((users: any) => {
      if (users.data) {
        this.user = users.data;
      }
    });
  }
  goToUsers() {
    window.history.back();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
