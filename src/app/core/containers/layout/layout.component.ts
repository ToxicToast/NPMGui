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
  }

  private getGlobalPackages(): void {
    this._ipc.send('get-global-packages');
    this._ipc.on('set-global-packages', (event, args: { cmd: string, code: number, stderr?: string, stdout: string}) => {
      const packageArray = JSON.parse(args.stdout);
      console.error('LayoutComponent', packageArray);
    });
  }

}
