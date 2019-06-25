import { Injectable } from '@angular/core';

import { ActivePrinciple } from '../../models/active-principle';
import { Api } from '../api/api';

@Injectable()
export class ActivePrinciples {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/active-principles', params);
  }

  add(activePrinciple: ActivePrinciple) {
  }

  delete(activePrinciple: ActivePrinciple) {
  }

}
