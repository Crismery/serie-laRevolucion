import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeDetallePage } from './personaje-detalle.page';

describe('PersonajeDetallePage', () => {
  let component: PersonajeDetallePage;
  let fixture: ComponentFixture<PersonajeDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonajeDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
