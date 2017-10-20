import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonDemonComponent } from './summon-demon.component';

describe('SummonDemonComponent', () => {
  let component: SummonDemonComponent;
  let fixture: ComponentFixture<SummonDemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonDemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonDemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
