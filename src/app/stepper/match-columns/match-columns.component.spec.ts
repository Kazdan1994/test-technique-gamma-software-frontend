import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchColumnsComponent } from './match-columns.component';

describe('MatchColumnsComponent', () => {
  let component: MatchColumnsComponent;
  let fixture: ComponentFixture<MatchColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchColumnsComponent],
    });
    fixture = TestBed.createComponent(MatchColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
