import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMainComponent } from './input-main.component';

describe('InputMainComponent', () => {
  let component: InputMainComponent;
  let fixture: ComponentFixture<InputMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
