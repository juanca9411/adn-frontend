import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFuncionarioComponent } from './registrar-funcionario.component';

describe('RegistrarFuncionarioComponent', () => {
  let component: RegistrarFuncionarioComponent;
  let fixture: ComponentFixture<RegistrarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
