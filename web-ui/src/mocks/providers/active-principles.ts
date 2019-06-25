import { Injectable } from '@angular/core';

import { ActivePrinciple } from '../../models/active-principle';

@Injectable()
export class ActivePrinciples {
  activePrinciples: ActivePrinciple[] = [];

  defaultActivePrinciple: any = {
    "id": 1,
    "name": "Alkaloid 01",
    "description": "Lorem ipsum A01"
  };

  constructor() {
    let activePrinciples = [
      this.defaultActivePrinciple,
      {
        "id": 2,
        "name": "Glycoside 01",
        "description": "Lorem ipsum G-01"
      },
      {
        "id": 3,
        "name": "Saponin 01",
        "description": "Lorem ipsum S-01"
      },
      {
        "id": 4,
        "name": "Alkaloid 02",
        "description": "Lorem ipsum A-02"
      },
      {
        "id": 5,
        "name": "Fixed Oil 01",
        "description": "Lorem ipsum FO-01"
      },
      {
        "id": 6,
        "name": "Volatile Oil 01",
        "description": "Lorem ipsum VO-01"
      },
      {
        "id": 7,
        "name": "Fat",
        "description": "Lorem ipsum F-01"
      },
      {
        "id": 8,
        "name": "Wax 01",
        "description": "Lorem ipsum W-01"
      },
      {
        "id": 9,
        "name": "Resin 01",
        "description": "Lorem ipsum R-01"
      },
      {
        "id": 10,
        "name": "Balsam 01",
        "description": "Lorem ipsum B-01"
      },
      {
        "id": 11,
        "name": "Tannin 01",
        "description": "Lorem ipsum T-01"
      }
    ];

    for (let ap of activePrinciples) {
      this.activePrinciples.push(new ActivePrinciple(ap));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.activePrinciples;
    }

    return this.activePrinciples.filter((activePrinciple) => {
      for (let key in params) {
        if (params[key] == null || params[key] == undefined || params[key] == "") {
          continue;
        }
        let field = activePrinciple[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          continue;
        } else if (field == params[key]) {
          continue;
        } else {
          return null;
        }
      }
      return activePrinciple;
    });
  }

  add(activePrinciple: ActivePrinciple) {
    activePrinciple.id = this.activePrinciples.length;
    this.activePrinciples.push(activePrinciple);
  }

  delete(activePrinciple: ActivePrinciple) {
    this.activePrinciples.splice(this.activePrinciples.indexOf(activePrinciple), 1);
  }

  update(activePrinciple: ActivePrinciple) {
    let index = this.activePrinciples.findIndex(a => a.id == activePrinciple.id);
    if (index >= 0) {
      this.activePrinciples[index].name = activePrinciple.name
      this.activePrinciples[index].description = activePrinciple.description
    } 
  }
}
