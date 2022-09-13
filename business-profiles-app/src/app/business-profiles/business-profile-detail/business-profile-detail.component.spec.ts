import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProfileDetailComponent } from './business-profile-detail.component';

describe('BusinessProfileDetailComponent', () => {
  let component: BusinessProfileDetailComponent;
  let fixture: ComponentFixture<BusinessProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessProfileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
