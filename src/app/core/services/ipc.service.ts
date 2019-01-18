import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {

  private _ipc: IpcRenderer | undefined;

  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      this.errorMessage();
    }
  }

  public on(channel: string, listener: Function): void {
    if (!this._ipc) {
      this.errorMessage();
      return;
    }
    this._ipc.on(channel, listener);
  }

  public send(channel: string, ...args): void {
    if (!this._ipc) {
      this.errorMessage();
      return;
    }
    this._ipc.send(channel, ...args);
  }

  private errorMessage(): void {
    console.error('Electron\'s IPC was not loaded');
  }
}
