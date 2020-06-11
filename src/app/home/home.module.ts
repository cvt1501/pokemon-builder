import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppHomeRouterComponent } from './home-router.component';
import { ListComponent, CardComponent, TeamComponent } from './components';
import { ListService, TeamService } from './services';

/**
 * @author Kevin Cavenatti <kevin_cavenatti@hotmail.com>
 * @version 1.0.0
 */

@NgModule({
  declarations: [
    AppHomeRouterComponent,
    CardComponent,
    ListComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ListService,
    TeamService
  ]
})

export class HomeModule {}
