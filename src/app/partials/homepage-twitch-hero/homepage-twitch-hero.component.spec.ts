import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTwitchHeroComponent } from './homepage-twitch-hero.component';

describe('HomepageTwitchHeroComponent', () => {
  let component: HomepageTwitchHeroComponent;
  let fixture: ComponentFixture<HomepageTwitchHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTwitchHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTwitchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
