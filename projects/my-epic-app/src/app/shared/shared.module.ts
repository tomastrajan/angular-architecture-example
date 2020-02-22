import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TagListComponent } from './tag-list/tag-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TagListComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,

    // local
    TagListComponent
  ]
})
export class SharedModule {}
