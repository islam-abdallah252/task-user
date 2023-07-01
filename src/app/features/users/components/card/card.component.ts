import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardUserComponent implements OnInit {
  @Input() user: IUser = {} as IUser;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToUser(id: number) {
    this.router.navigate(['users', id]);
  }
}
