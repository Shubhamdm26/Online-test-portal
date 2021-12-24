import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeatestComponent } from './takeatest.component';

describe('TakeatestComponent', () => {
  let component: TakeatestComponent;
  let fixture: ComponentFixture<TakeatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
