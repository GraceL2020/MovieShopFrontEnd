import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCardListComponent } from './cast-card-list.component';

describe('CastCardListComponent', () => {
  let component: CastCardListComponent;
  let fixture: ComponentFixture<CastCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
