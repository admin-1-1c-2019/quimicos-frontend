import { Injectable } from '@angular/core';

import { Product } from '../../models/product';

@Injectable()
export class Products {
  products: Product[] = [];

  defaultProduct: any = {
    "id": 1,
    "name": "Toltrazol",
    "description": "Kills some parasites in cats and dogs",
    "images": ["assets/img/products/toltrazol_01.png", "assets/img/products/toltrazol_02.png"],
    "size": 100,
    "activePrincipleId": 1
  };

  constructor() {
    let products = [
      this.defaultProduct,
      {
        "id": 2,
        "name": "Aspirin",
        "description": "For headaches",
        "images": ["assets/img/products/aspirin.jpeg"],
        "size": 200,
        "activePrincipleId": 2
      },
      {
        "id": 3,
        "name": "Clonazepam",
        "description": "Slows you down",
        "images": ["assets/img/products/clonazepam.jpg"],
        "size": 150,
        "activePrincipleId": 3
      },
      {
        "id": 4,
        "name": "Diego's power",
        "description": "Turns you into a human torch",
        "images": ["assets/img/products/cocaine.jpeg"],
        "size": 100,
        "activePrincipleId": 4
      },
      {
        "id": 5,
        "name": "Weed",
        "description": "Chillax",
        "images": ["assets/img/products/marijuana.jpeg"],
        "size": 250,
        "activePrincipleId": 5
      },
      {
        "id": 6,
        "name": "Heroin",
        "description": "Luca not dead",
        "images": ["assets/img/products/heroin.jpg"],
        "size": 350,
        "activePrincipleId": 6
      },
      {
        "id": 7,
        "name": "Vicodin",
        "description": "Gregory House's favorite",
        "images": ["assets/img/products/vicodin.jpeg"],
        "size": 100,
        "activePrincipleId": 7
      },
      {
        "id": 8,
        "name": "Alikal",
        "description": "Partied too hard last night?",
        "images": ["assets/img/products/alikal.jpeg"],
        "size": 200,
        "activePrincipleId": 2
      },
      {
        "id": 9,
        "name": "Garombol",
        "description": "And stop caring",
        "images": ["assets/img/products/garombol.jpg"],
        "size": 70,
        "activePrincipleId": 8
      },
      {
        "id": 10,
        "name": "Rivotril",
        "description": "Don't mix with Ventus",
        "images": ["assets/img/products/rivotril.jpg"],
        "size": 150,
        "activePrincipleId": 3
      },
      {
        "id": 11,
        "name": "Ayahuasca",
        "description": "Don't give this to Rolando Graña",
        "images": ["assets/img/products/ayahuasca.jpg"],
        "size": 20,
        "activePrincipleId": 9
      }
    ];

    for (let product of products) {
      this.products.push(new Product(product));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.products;
    }

    return this.products.filter((product) => {
      for (let key in params) {
        if (params[key] == null || params[key] == undefined || params[key] == "") {
          continue;
        }
        let field = product[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          continue;
        } else if (field == params[key]) {
          continue;
        } else {
          return null;
        }
      }
      return product;
    });
  }

  add(product: Product) {
    this.products.push(product);
  }

  delete(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }
}
