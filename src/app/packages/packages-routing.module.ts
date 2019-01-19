import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesContainerComponent } from './containers/packages-container/packages-container.component';

const routes: Routes = [
  {
    path: 'packages',
    component: PackagesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
