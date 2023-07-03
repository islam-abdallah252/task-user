import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routing';
import { CardUserModule } from './components/card/card.module';
import { DetailsComponent, UsersListComponent } from './pages';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '@SharedModule/pipes/filter.pipe';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@SharedModule/shared.module';

const materialModule = [MatPaginatorModule, MatButtonModule];
@NgModule({
  declarations: [
    UsersComponent,
    UsersComponent,
    UsersListComponent,
    DetailsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutes,
    FormsModule,
    CardUserModule,
    SharedModule,
    ...materialModule,
  ],
  exports: [UsersComponent, CardUserModule],
})
export class UsersModule {}
