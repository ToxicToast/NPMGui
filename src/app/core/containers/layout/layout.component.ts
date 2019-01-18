import { Component, OnInit } from '@angular/core';
import { IpcService } from '../../services/ipc.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {



  constructor(private _ipc: IpcService) { }

  ngOnInit() {
    console.error('LayoutComponent', this);
    this.getGlobalPackages();
    // this.checkPackageVersion();
    this.getOutdatedPackages();
  }

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
  }

}
