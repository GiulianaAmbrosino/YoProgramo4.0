import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrePerfilComponent } from './nombre-perfil.component';

describe('NombrePerfilComponent', () => {
  let component: NombrePerfilComponent;
  let fixture: ComponentFixture<NombrePerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombrePerfilComponent]
    });
    fixture = TestBed.createComponent(NombrePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
