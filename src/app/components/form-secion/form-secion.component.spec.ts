import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecionComponent } from './form-secion.component';

describe('FormSecionComponent', () => {
  let component: FormSecionComponent;
  let fixture: ComponentFixture<FormSecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSecionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
