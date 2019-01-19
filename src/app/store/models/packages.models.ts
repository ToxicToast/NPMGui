export interface PackageStateModel {
  loading: boolean;
  error: boolean;
  packages: DependenciesModel; // TODO PackageModel
}

export interface PackageModel {
  from: string;
  resolved: string;
  version: string;
}

export interface DependenciesModel {
  dependencies: PackageModel[];
}
