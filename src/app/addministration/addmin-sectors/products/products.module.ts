import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsRouteModule } from './products.route';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    ProductsRouteModule,
  ],
  exports: [

  ],
  providers: [

  ]
})

export class ProductsModule {}
