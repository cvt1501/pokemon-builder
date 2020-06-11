import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ListService } from '../../services/list';
import { CardComponent } from './card.component';

describe('PokemonCardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CardComponent ],
      providers: [ HttpClient, ListService ]
    })
    .compileComponents();
  }));
});
