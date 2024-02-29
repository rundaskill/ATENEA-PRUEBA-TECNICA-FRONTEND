import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './Person.component';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [PersonComponent],
  exports: [PersonComponent],
})
export class PersonModule {}
