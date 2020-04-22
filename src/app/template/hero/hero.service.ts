import { Injectable } from '@angular/core';
import { Hero } from 'src/app/domain/hero';
import { HEROES } from 'src/app/domain/mock-heros';
import { of, Observable } from 'rxjs';
import { MessageService } from 'src/app/common/common-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
