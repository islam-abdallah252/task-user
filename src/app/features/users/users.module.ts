import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { CardUserModule } from './components/card/card.module';
import { UsersListComponent } from './pages';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UsersComponent, UsersComponent, UsersListComponent],
  imports: [CommonModule, UsersRoutes, CardUserModule, MatPaginatorModule],
  exports: [UsersComponent, CardUserModule],
})
export class UsersModule {}
