import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/config/apis';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(page = 1) {
    return this.http.get(APIS.users.list + `${page}`);
  }
  getOne(id: number) {
    return this.http.get(APIS.users.detail + `${id}`);
  }
}
