import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './Area.component';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [AreaComponent],
  exports: [AreaComponent],
})
export class AreaModule {}
