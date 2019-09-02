import { NgModule } from '@angular/core';
import { AddminComponent } from './addmin.component';
import { CommonModule } from '@angular/common';
import { AddminRouteModule } from './addmin.route';
import { AddminSectorsModule } from './addmin-sectors/addmin-sectors.module';

@NgModule({
  declarations: [
    AddminComponent,
  ],
  imports: [
    CommonModule,
    AddminRouteModule,
    AddminSectorsModule,
  ],
  exports: [

  ],
  providers: [
  ]
})

export class AddminModule {}