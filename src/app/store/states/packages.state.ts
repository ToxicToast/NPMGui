import { State, Action, StateContext } from '@ngxs/store';
import { IpcService } from '../../core/services/ipc.service';
import { LoadGlobalPackages, SuccessGlobalPackages, ErrorGlobalPackages } from '../actions/packages.actions';

// TODO : Interface
@State<any>({
  name: 'packages',
  defaults: {
    loading: false,
    error: false,
    packages: []
  }
})
export class PackagesState {

  constructor(private _ipc: IpcService) { }

  @Action(LoadGlobalPackages)
  loadPackages(ctx: StateContext<any>) {
    ctx.patchState({
      loading: true,
      packages: []
    });
    //
    this._ipc.send('get-global-packages');
    this._ipc.on('set-global-packages', (event, args) => {
      console.error('LoadGlobalPackages', 'set-global-packages', args);
      try {
        const packageArray = JSON.parse(args.stdout);
        ctx.dispatch(new SuccessGlobalPackages(packageArray));
      } catch (error) {
        ctx.dispatch(new ErrorGlobalPackages(error));
      }
    });
  }

  @Action(SuccessGlobalPackages)
  successPackages(ctx: StateContext<any>, action: SuccessGlobalPackages) {
    console.error('SuccessGlobalPackages', action.packages);
    ctx.patchState({
      loading: false,
      packages: action.packages
    });
  }

  @Action(ErrorGlobalPackages)
  errorPackages(ctx: StateContext<any>, action: ErrorGlobalPackages) {
    console.error('ErrorGlobalPackages', action.message);
    ctx.patchState({
      loading: false,
      error: true,
      packages: []
    });
  }

}
