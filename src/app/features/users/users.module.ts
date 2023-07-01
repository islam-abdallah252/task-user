import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { CardUserModule } from './components/card/card.module';
import { UsersListComponent } from './pages';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '@SharedModule/pipes/filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materialModule = [MatPaginatorModule, MatInputModule, MatButtonModule];
@NgModule({
  declarations: [
    UsersComponent,
    UsersComponent,
    UsersListComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutes,
    FormsModule,
    CardUserModule,
    ...materialModule,
  ],
  exports: [UsersComponent, CardUserModule],
})
export class UsersModule {}
