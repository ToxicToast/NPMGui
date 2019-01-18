export class LoadGlobalPackages {
  static readonly type = '[Packages] Load Packages';
  constructor() {}
}

export class SuccessGlobalPackages {
  static readonly type = '[Packages] Loaded Packages';
  constructor(public packages: any[]) {} // TODO : Interface
}

export class ErrorGlobalPackages {
  static readonly type = '[Packages] Error';
  constructor(public message: string) {}
}
