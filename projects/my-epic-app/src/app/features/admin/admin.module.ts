import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
