import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiaFestivoComponent } from './listar-dia-festivo.component';

describe('ListarDiaFestivoComponent', () => {
  let component: ListarDiaFestivoComponent;
  let fixture: ComponentFixture<ListarDiaFestivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDiaFestivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiaFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
