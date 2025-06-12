import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerBox } from './winner-box';

describe('WinnerBox', () => {
  let component: WinnerBox;
  let fixture: ComponentFixture<WinnerBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnerBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
