import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDiaFestivoComponent } from './registrar-dia-festivo.component';

describe('RegistrarDiaFestivoComponent', () => {
  let component: RegistrarDiaFestivoComponent;
  let fixture: ComponentFixture<RegistrarDiaFestivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDiaFestivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDiaFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
