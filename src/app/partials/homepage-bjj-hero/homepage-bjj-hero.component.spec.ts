import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBjjHeroComponent } from './homepage-bjj-hero.component';

describe('HomepageBjjHeroComponent', () => {
  let component: HomepageBjjHeroComponent;
  let fixture: ComponentFixture<HomepageBjjHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageBjjHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBjjHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
