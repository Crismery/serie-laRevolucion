import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentosPage } from './momentos.page';

describe('MomentosPage', () => {
  let component: MomentosPage;
  let fixture: ComponentFixture<MomentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MomentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
