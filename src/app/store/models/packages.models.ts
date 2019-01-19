export interface PackageStateModel {
  loading: boolean;
  error: boolean;
  packages?: DependenciesModel;
  outdated?: any;
}

export interface PackageModel {
  from: string;
  resolved: string;
  version: string;
}

export interface DependenciesModel {
  dependencies: PackageModel[];
  problems?: string[];
}

export interface PackageState {
  title?: string;
  installed_version?: string;
  latest_version?: string;
  outdated?: boolean;
}
