import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  fromEvent,
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
  map,
} from 'rxjs';
import { UsersService } from 'src/app/features/users/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('inputFilter') inputFilter!: ElementRef;

  constructor(
    public snackBar: MatSnackBar,
    private usersService: UsersService
  ) {}

  ngOnInit() {}

  openSnackBar(
    message: string = 'We are working on a new feature that will allow to you soon as we can'
  ) {
    this.snackBar.open(message, '', {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.inputFilter.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(250),
        map((event: any) => event.target.value),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.usersService.searchKeyWord.next(res);
      });
  }
}
