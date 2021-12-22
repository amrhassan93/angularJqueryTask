import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTempComponent } from './my-temp.component';

describe('MyTempComponent', () => {
  let component: MyTempComponent;
  let fixture: ComponentFixture<MyTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
