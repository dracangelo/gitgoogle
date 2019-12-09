import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitgoogleComponent } from './gitgoogle.component';

describe('GitgoogleComponent', () => {
  let component: GitgoogleComponent;
  let fixture: ComponentFixture<GitgoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitgoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
