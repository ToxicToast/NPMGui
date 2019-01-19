import { Component, OnInit, Input } from '@angular/core';
import { PackageStateModel } from '../../../store/models/packages.models';

@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.scss']
})
export class PackagelistComponent implements OnInit {

  @Input() packages: PackageStateModel;
  displayedColumns: string[] = ['name', 'version', 'status', 'action'];

  constructor() { }

  ngOnInit() {}

  get loading(): boolean {
    return this.packages.loading;
  }

  get error(): boolean {
    return this.packages.error;
  }

  get packageList() {
    return this.packages.packages;
  }

  get dependencies() {
    return this.packageList.dependencies;
  }

  dependencyArray(dependencies): any[] {
    const array = [];
    for (let item in dependencies) {
      const object = dependencies[item];
      if (object.hasOwnProperty('required')) {
        const packageObject = {
          from: object.required._id,
          resolved: object.required._resolved,
          version: object.required.version,
          name: item
        };
        array.push(packageObject);
      } else {
        const depObject = Object.assign({
          name: item
        }, object);
        array.push(depObject);
      }
    }
    return array;
  }

  setVersionDisplay(version: string) {
    if (version) {
      return version;
    }
    return 'n/a';
  }
}
