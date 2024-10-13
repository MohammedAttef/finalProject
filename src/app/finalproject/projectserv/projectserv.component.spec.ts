import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectservComponent } from './projectserv.component';

describe('ProjectservComponent', () => {
  let component: ProjectservComponent;
  let fixture: ComponentFixture<ProjectservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectservComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
