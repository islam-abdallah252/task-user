import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [CardUserComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardUserComponent],
})
export class CardUserModule {}
