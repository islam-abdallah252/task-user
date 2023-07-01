import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  FooterComponent,
  HeaderComponent,
  LoadingComponent,
} from './components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const sharedComponents = [HeaderComponent, FooterComponent, LoadingComponent];
const materialModule = [
  MatToolbarModule,
  MatMenuModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [CommonModule, ...materialModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
})
export class SharedModule {}
