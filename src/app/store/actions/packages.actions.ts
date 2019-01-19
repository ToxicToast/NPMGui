import { DependenciesModel } from '../models/packages.models';

export class LoadGlobalPackages {
  static readonly type = '[Packages] Load Packages';
  constructor() {}
}

export class SuccessGlobalPackages {
  static readonly type = '[Packages] Loaded Packages';
  constructor(public packages: DependenciesModel) {} // TODO : Interface
}

export class ErrorGlobalPackages {
  static readonly type = '[Packages] Error';
  constructor(public message: string) {}
}
