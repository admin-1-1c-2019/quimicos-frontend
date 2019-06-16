import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Products {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Toltrazol",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Kills some parasites in cats and dogs"
      },
      {
        "name": "Aspirine",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "For headaches"
      },
      {
        "name": "Clonazepam",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Slows you down"
      },
      {
        "name": "Diego's power",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Turns you into a human torch"
      },
      {
        "name": "Weed",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Chillax"
      },
      {
        "name": "Heroin",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Luca not dead"
      },
      {
        "name": "Vicodin",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Gregory House's favorite"
      },
      {
        "name": "Alikal",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Partied too hard last night?"
      },
      {
        "name": "Garombol",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "And stop caring"
      },
      {
        "name": "Rivotril",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Don't mix with Ventus"
      },
      {
        "name": "Ayahuasca",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Don't give this to Rolando Graña"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
