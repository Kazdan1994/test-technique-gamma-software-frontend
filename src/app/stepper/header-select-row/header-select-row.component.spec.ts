import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSelectRowComponent } from './header-select-row.component';

describe('HeaderSelectRowComponent', () => {
  let component: HeaderSelectRowComponent;
  let fixture: ComponentFixture<HeaderSelectRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSelectRowComponent],
    });
    fixture = TestBed.createComponent(HeaderSelectRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
