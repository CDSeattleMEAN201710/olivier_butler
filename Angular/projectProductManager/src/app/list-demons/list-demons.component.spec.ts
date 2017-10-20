import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemonsComponent } from './list-demons.component';

describe('ListDemonsComponent', () => {
  let component: ListDemonsComponent;
  let fixture: ComponentFixture<ListDemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
