import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar(
    message: string = 'We are working on a new feature that will allow to you soon as we can'
  ) {
    this.snackBar.open(message, '', {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
