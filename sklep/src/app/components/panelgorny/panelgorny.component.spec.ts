import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgornyComponent } from './panelgorny.component';

describe('PanelgornyComponent', () => {
  let component: PanelgornyComponent;
  let fixture: ComponentFixture<PanelgornyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelgornyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelgornyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
