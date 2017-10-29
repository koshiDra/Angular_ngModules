import { Component }   from '@angular/core';

import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName = '';
  constructor(user: UserService) {
    this.userName = user.userName;
  }
}
