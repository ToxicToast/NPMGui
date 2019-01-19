import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesContainerComponent } from './containers/packages-container/packages-container.component';
import { PackagelistComponent } from './components/packagelist/packagelist.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    PackagesContainerComponent,
    PackagelistComponent,
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    CoreModule,
    MaterialModule
  ],
  exports: [
    PackagesContainerComponent,
    PackagelistComponent,
  ]
})
export class PackagesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PackagesModule,
      providers: []
    };
  }
}
