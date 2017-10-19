import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubqueryComponent } from './githubquery.component';

describe('GithubqueryComponent', () => {
  let component: GithubqueryComponent;
  let fixture: ComponentFixture<GithubqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
