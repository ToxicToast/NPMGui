import { State, Action, StateContext } from '@ngxs/store';
import { IpcService } from '../../core/services/ipc.service';
import { LoadGlobalPackages, SuccessGlobalPackages, ErrorGlobalPackages, LoadOutdatedPackages, SuccessOutdatedPackages } from '../actions/packages.actions';
import { Command } from '../models/Shell.models';
import { DependenciesModel, PackageStateModel, PackageState } from '../models/packages.models';

@State<PackageStateModel>({
  name: 'packages',
  defaults: {
    loading: false,
    error: false,
    packages: null,
    outdated: null
  }
})
export class PackagesState {

  constructor(private _ipc: IpcService) { }

  @Action(LoadOutdatedPackages)
  LoadOutdatedPackages(ctx: StateContext<PackageStateModel>) {
    ctx.patchState({
      loading: true,
      outdated: null,
    });
    //
    this._ipc.send('get-outdated-packages');
    this._ipc.on('set-outdated-packages', (event, args: Command) => {
      try {
        const packageArray = JSON.parse(args.stdout);
        // ctx.dispatch(new SuccessOutdatedPackages(packageArray));
      } catch (error) {
        // ctx.dispatch(new ErrorGlobalPackages(args.stderr));
      }
    });
  }

  @Action(LoadGlobalPackages)
  loadPackages(ctx: StateContext<PackageStateModel>) {
    ctx.patchState({
      loading: true,
      packages: null
    });
    //
    this._ipc.send('get-global-packages');
    this._ipc.on('set-global-packages', (event, args: Command) => {
      try {
        const packageArray: DependenciesModel = JSON.parse(args.stdout);
        console.error(packageArray);
        ctx.dispatch(new SuccessGlobalPackages(packageArray));
      } catch (error) {
        ctx.dispatch(new ErrorGlobalPackages(args.stderr));
      }
    });
  }

  @Action(SuccessGlobalPackages)
  successPackages(ctx: StateContext<any>, action: SuccessGlobalPackages) {
    const packageArray: DependenciesModel = action.packages;
    ctx.patchState({
      loading: false,
      packages: packageArray
    });
  }

  @Action(ErrorGlobalPackages)
  errorPackages(ctx: StateContext<any>, action: ErrorGlobalPackages) {
    ctx.patchState({
      loading: false,
      error: true,
      packages: null
    });
  }

  private setPackageArray(packageObject: DependenciesModel): PackageState[] {
    const packages: PackageState[] = [];
    return packages;
  }

}
