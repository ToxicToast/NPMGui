import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PackagesState } from 'src/app/store/states/packages.state';
import { Observable } from 'rxjs';
import { LoadGlobalPackages } from 'src/app/store/actions/packages.actions';

@Component({
  selector: 'app-packages-container',
  templateUrl: './packages-container.component.html',
  styleUrls: ['./packages-container.component.scss']
})
export class PackagesContainerComponent implements OnInit {

  @Select(PackagesState) packages$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadGlobalPackages());
  }

}
