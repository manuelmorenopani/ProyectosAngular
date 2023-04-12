import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFundamentosComponent } from './componente-fundamentos.component';

describe('ComponenteFundamentosComponent', () => {
  let component: ComponenteFundamentosComponent;
  let fixture: ComponentFixture<ComponenteFundamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteFundamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
