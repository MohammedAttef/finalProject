import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonePortfolioComponent } from './clone-portfolio.component';

describe('ClonePortfolioComponent', () => {
  let component: ClonePortfolioComponent;
  let fixture: ComponentFixture<ClonePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClonePortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClonePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
