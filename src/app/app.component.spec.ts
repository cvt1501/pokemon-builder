import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AppHomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home';
import { HeaderComponent, FooterComponent } from './core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        AppHomeRoutingModule,
        HomeModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
        ,FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
