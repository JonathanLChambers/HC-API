import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent {
  @Input()
  hero: Hero;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private heroService: HeroService) {}

  createHero(hero: Hero) {
    this.heroService.createHero(hero).then((newHero: Hero) => {
      this.createHandler(newHero);
    });
  }

  updateHero(hero: Hero): void {
    this.heroService.updateHero(hero).then((updatedHero: Hero) => {
      this.updateHandler(updatedHero);
    });
  }

  deleteHero(heroId: String): void {
    this.heroService.deleteHero(heroId).then((deletedHeroId: String) => {
      this.deleteHandler(deletedHeroId);
    });
  }
}
