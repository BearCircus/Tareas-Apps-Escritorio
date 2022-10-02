import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasArticlesComponent } from './noticias-articles.component';

describe('NoticiasArticlesComponent', () => {
  let component: NoticiasArticlesComponent;
  let fixture: ComponentFixture<NoticiasArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
