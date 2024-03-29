import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRouteModule {}
