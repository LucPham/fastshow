import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddminSectorComponent } from './addmin-sectors.component';

const routes: Routes = [
  {
    path: '',
    component: AddminSectorComponent,
    children: [
      {
        path: '',
        loadChildren: './products/products.module#ProductsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddminSectorsRouteModule {}
