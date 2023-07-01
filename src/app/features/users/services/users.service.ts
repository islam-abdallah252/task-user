import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/config/apis';
import { IUser } from '../interfaces/IUser';
import { Observable, map, share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  cachedUsers$!: Observable<any[]>;

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
  getOne(id: number) {
    return this.http.get(APIS.users.detail + `${id}`);
  }
}
