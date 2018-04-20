import { Injectable } from '@angular/core';
import {Hero} from './hero'
import{Http, Response} from'@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
  private heroUrl = '/api/hero'
  constructor(private http: Http) {}

  getHeroes(): Promise<void | Hero[]>{
    return this.http.get(this.heroUrl)
               .toPromise()
               .then(response => response.json() as Hero[])
               .catch(this.handleError)
  }
  createHero(newHero: Hero): Promise<void | Hero> {
    return this.http.post(this.heroUrl, newHero)
               .toPromise()
               .then(response => response.json() as Hero)
               .catch(this.handleError);
  }

  // get("/api/hero/:id") endpoint not used by Angular app

  // delete("/api/hero/:id")
  deleteHero(delHeroId: String): Promise<void | String> {
    return this.http.delete(this.heroUrl + '/' + delHeroId)
               .toPromise()
               .then(response => response.json() as String)
               .catch(this.handleError);
  }

  // put("/api/hero/:id")
  updateHero(putHero: Hero): Promise<void | Hero> {
    var putUrl = this.heroUrl + '/' + putHero._id;
    return this.http.put(putUrl, putHero)
               .toPromise()
               .then(response => response.json() as Hero)
               .catch(this.handleError);
  }



  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
