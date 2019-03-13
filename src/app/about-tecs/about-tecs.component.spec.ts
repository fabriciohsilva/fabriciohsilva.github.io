import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTecsComponent } from './about-tecs.component';

describe('AboutTecsComponent', () => {
  let component: AboutTecsComponent;
  let fixture: ComponentFixture<AboutTecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
