import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesContainerComponent } from './packages-container.component';

describe('PackagesContainerComponent', () => {
  let component: PackagesContainerComponent;
  let fixture: ComponentFixture<PackagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
