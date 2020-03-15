import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWebdevHeroComponent } from './homepage-webdev-hero.component';

describe('HomepageWebdevHeroComponent', () => {
  let component: HomepageWebdevHeroComponent;
  let fixture: ComponentFixture<HomepageWebdevHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWebdevHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWebdevHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
