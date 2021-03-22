import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudPorFuncionarioComponent } from './listar-solicitud-por-funcionario.component';

describe('ListarSolicitudPorFuncionarioComponent', () => {
  let component: ListarSolicitudPorFuncionarioComponent;
  let fixture: ComponentFixture<ListarSolicitudPorFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudPorFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudPorFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
