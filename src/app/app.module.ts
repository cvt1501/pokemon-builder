import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppHomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './core';
import { Page404Component } from './core/page404/page404.component';

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppHomeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
