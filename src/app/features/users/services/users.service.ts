import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/config/apis';
import { IUser } from '../interfaces/IUser';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  share,
  shareReplay,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  cachedUsers$!: Observable<any[]>;
  public searchKeyWord = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  getAll(page = 1, newRequest = false) {
    if (!this.cachedUsers$ || newRequest) {
      this.cachedUsers$ = this.http.get(APIS.users.list + `${page}`).pipe(
        map((response: any) => response),
        shareReplay(1)
      );
    }

    return this.cachedUsers$;
  }

  searchInUsers(search = ''): Observable<any> {
    return this.http.get(APIS.users.detail + `${search}`).pipe(
      catchError((error: any) => {
        return throwError(() => error);
      })
    );
  }
  getOne(id: number) {
    return this.http.get(APIS.users.detail + `${id}`);
  }
}
