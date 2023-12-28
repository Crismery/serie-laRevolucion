import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnMiVidaPage } from './en-mi-vida.page';

describe('EnMiVidaPage', () => {
  let component: EnMiVidaPage;
  let fixture: ComponentFixture<EnMiVidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnMiVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
