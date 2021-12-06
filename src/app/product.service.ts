import { Injectable } from '@angular/core';

export interface Products {
  pId: number;
  category: string;
  pName: string;
  quantity: number;
}
@Injectable()
export class ProductService {
  public products: any[] = [
    {
      pId: 1,
      category: 'food',
      pName: 'Rice',
      quantity: 1,
    },
    {
      pId: 2,
      category: 'healthCare',
      pName: 'Moisturizer',
      quantity: 1,
    },
    {
      pId: 3,
      category: 'fashion',
      pName: 'Jeans',
      quantity: 1,
    },
  ];
  constructor() {}
}
