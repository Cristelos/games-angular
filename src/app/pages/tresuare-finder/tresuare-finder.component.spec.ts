import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresuareFinderComponent } from './tresuare-finder.component';

describe('TresuareFinderComponent', () => {
  let component: TresuareFinderComponent;
  let fixture: ComponentFixture<TresuareFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresuareFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresuareFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
