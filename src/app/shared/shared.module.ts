import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from './components';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
const sharedComponents = [HeaderComponent, FooterComponent];
const materialModule = [
  MatToolbarModule,
  MatMenuModule,
  MatSnackBarModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule, ...materialModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
})
export class SharedModule {}
