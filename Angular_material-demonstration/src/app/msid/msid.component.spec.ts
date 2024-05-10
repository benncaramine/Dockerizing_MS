import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsidComponent } from './msid.component';

describe('MsidComponent', () => {
  let component: MsidComponent;
  let fixture: ComponentFixture<MsidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
