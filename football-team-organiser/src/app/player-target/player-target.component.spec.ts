import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTargetComponent } from './player-target.component';

describe('PlayerTargetComponent', () => {
  let component: PlayerTargetComponent;
  let fixture: ComponentFixture<PlayerTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
