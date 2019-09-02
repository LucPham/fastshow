import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddminComponent } from './addmin.component';
const routes: Routes = [
  {
    path: '',
    component: AddminComponent,
    children: [
      {
        path: '',
        loadChildren: './addmin-sectors/addmin-sectors.module#AddminSectorsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddminRouteModule {}