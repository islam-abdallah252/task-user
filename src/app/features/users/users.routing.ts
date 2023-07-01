import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent, UsersListComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];

export const UsersRoutes = RouterModule.forChild(routes);
