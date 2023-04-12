import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTypescriptComponent } from './componente-typescript.component';

describe('ComponenteTypescriptComponent', () => {
  let component: ComponenteTypescriptComponent;
  let fixture: ComponentFixture<ComponenteTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
