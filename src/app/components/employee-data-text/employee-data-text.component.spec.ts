import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataTextComponent } from './employee-data-text.component';

describe('EmployeeDataTextComponent', () => {
  let component: EmployeeDataTextComponent;
  let fixture: ComponentFixture<EmployeeDataTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDataTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDataTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
