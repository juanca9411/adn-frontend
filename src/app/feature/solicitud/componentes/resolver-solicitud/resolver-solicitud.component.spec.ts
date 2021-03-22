import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverSolicitudComponent } from './resolver-solicitud.component';

describe('ResolverSolicitudComponent', () => {
  let component: ResolverSolicitudComponent;
  let fixture: ComponentFixture<ResolverSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
