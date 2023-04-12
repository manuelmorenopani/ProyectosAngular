import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteQueenComponent } from './componente-queen.component';

describe('ComponenteQueenComponent', () => {
  let component: ComponenteQueenComponent;
  let fixture: ComponentFixture<ComponenteQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteQueenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
