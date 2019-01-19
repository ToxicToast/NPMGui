import { PackageState } from '../models/packages.models';

export class LoadGlobalPackages {
  static readonly type = '[Packages] Load Packages';
  constructor() {}
}

export class SuccessGlobalPackages {
  static readonly type = '[Packages] Loaded Packages';
  constructor(public packages: PackageState[]) {}
}

export class ErrorGlobalPackages {
  static readonly type = '[Packages] Error';
  constructor(public message: string) {}
}

export class LoadOutdatedPackages {
  static readonly type = '[Packages] Load Outdated';
  constructor() {}
}

export class SuccessOutdatedPackages {
  static readonly type = '[Packages] Loaded Outdated';
  constructor(public packages: any) {} // TODO : Interface
}

