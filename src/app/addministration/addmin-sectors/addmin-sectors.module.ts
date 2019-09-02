import { NgModule } from '@angular/core';
import { ProductsModule } from './products/products.module';
import { AddminSectorsRouteModule } from './addmin-sectors.route';
import { AddminSectorComponent } from './addmin-sectors.component';

@NgModule({
  imports: [
    AddminSectorsRouteModule,
    ProductsModule,
  ],
  exports: [

  ],
  declarations: [
    AddminSectorComponent
  ],
  providers: [

  ],

})

export class AddminSectorsModule { }
