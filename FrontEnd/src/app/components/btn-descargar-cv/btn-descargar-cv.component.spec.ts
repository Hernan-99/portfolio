import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDescargarCvComponent } from './btn-descargar-cv.component';

describe('BtnDescargarCvComponent', () => {
  let component: BtnDescargarCvComponent;
  let fixture: ComponentFixture<BtnDescargarCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDescargarCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDescargarCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
