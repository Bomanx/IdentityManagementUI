import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompartmentComponent } from './create-compartment.component';

describe('CreateCompartmentComponent', () => {
  let component: CreateCompartmentComponent;
  let fixture: ComponentFixture<CreateCompartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
