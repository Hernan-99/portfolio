import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSobreMiComponent } from './btn-sobre-mi.component';

describe('BtnSobreMiComponent', () => {
  let component: BtnSobreMiComponent;
  let fixture: ComponentFixture<BtnSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
