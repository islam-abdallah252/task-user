import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/features/users/interfaces/IUser';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: IUser[],
    filterString: string,
    property: keyof IUser
  ): IUser[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: IUser[] = [];
    for (let user of value) {
      const propValue = user[property];
      if (
        typeof propValue === 'string' &&
        propValue.toLowerCase().includes(filterString.toLowerCase())
      ) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}
