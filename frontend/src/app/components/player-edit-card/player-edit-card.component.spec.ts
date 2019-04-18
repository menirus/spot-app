import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEditCardComponent } from './player-edit-card.component';

describe('PlayerEditCardComponent', () => {
  let component: PlayerEditCardComponent;
  let fixture: ComponentFixture<PlayerEditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
