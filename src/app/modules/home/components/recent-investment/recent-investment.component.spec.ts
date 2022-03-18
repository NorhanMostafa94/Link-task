import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentInvestmentComponent } from './recent-investment.component';

describe('RecentInvestmentComponent', () => {
  let component: RecentInvestmentComponent;
  let fixture: ComponentFixture<RecentInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
