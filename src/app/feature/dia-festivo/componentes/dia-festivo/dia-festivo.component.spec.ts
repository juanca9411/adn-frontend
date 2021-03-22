import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaFestivoComponent } from './dia-festivo.component';

describe('DiaFestivoComponent', () => {
  let component: DiaFestivoComponent;
  let fixture: ComponentFixture<DiaFestivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaFestivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
