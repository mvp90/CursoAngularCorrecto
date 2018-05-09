import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaPersonaComponent } from './hola-persona.component';

describe('HolaPersonaComponent', () => {
  let component: HolaPersonaComponent;
  let fixture: ComponentFixture<HolaPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
