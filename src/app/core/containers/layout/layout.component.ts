import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { LoadGlobalPackages } from '../../../store/actions/packages.actions';
import { PackagesState } from '../../../store/states/packages.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Select(PackagesState) packages$: Observable<any>;


  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadGlobalPackages());
  }

  /*
  private getGlobalPackages(): void {
    this._ipc.send('get-global-packages');
    this._ipc.on('set-global-packages', (event, args: { cmd: string, code: number, stderr?: string, stdout: string}) => {
      const packageArray = JSON.parse(args.stdout);
      console.error('getGlobalPackages', packageArray);
    });
  }

  private checkPackageVersion() {
    this._ipc.send('check-package-version', 'typescript');
    this._ipc.on('checked-package-version', (event, args: { cmd: string, code: number, stderr?: string, stdout: string}) => {
      console.error('checkPackageVersion', args.stdout);
    });
  }

  private getOutdatedPackages() {
    this._ipc.send('get-outdated-packages');
    this._ipc.on('set-outdated-packages', (event, args: { cmd: string, code: number, stderr?: string, stdout: string }) => {
      const packageArray = JSON.parse(args.stdout);
      console.error('getOutdatedPackages', packageArray);
    });
  }*/
}
