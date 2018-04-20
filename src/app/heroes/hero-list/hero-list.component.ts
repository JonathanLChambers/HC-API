import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {

  heroes: Hero[]
  selectedHero: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit() {
     this.heroService
      .getHeroes()
      .then((heroes: Hero[]) => {
        this.heroes = heroes.map((hero) => {
          return hero;
        });
      });
  }

  private getIndexOfHero = (heroId: String) => {
    return this.heroes.findIndex((hero) => {
      return hero._id === heroId;
    });
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero
  }

  createNewHero() {
    var hero: Hero = {
      id: 0,
      name: '',
      value: 0,
      range: 0,
      wheel: [{
        stats: {
            attack: 0,
            defense: 0,
        },
        skills: [0]
      }]
    };

    // By default, a newly-created hero will have the selected state.
    this.selectHero(hero);
  }

  deleteHero = (heroId: String) => {
    var idx = this.getIndexOfHero(heroId);
    if (idx !== -1) {
      this.heroes.splice(idx, 1);
      this.selectHero(null);
    }
    return this.heroes;
  }

  addHero = (hero: Hero) => {
    this.heroes.push(hero);
    this.selectHero(hero);
    return this.heroes;
  }

  updateHero = (hero: Hero) => {
    var idx = this.getIndexOfHero(hero._id);
    if (idx !== -1) {
      this.heroes[idx] = hero;
      this.selectHero(hero);
    }
    return this.heroes;
  }

}
