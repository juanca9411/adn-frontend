import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDetalleFuncionarioComponent } from './consultar-detalle-funcionario.component';

describe('ConsultarDetalleFuncionarioComponent', () => {
  let component: ConsultarDetalleFuncionarioComponent;
  let fixture: ComponentFixture<ConsultarDetalleFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDetalleFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDetalleFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
