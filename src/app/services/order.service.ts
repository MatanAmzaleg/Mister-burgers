import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Burger, Drink } from '../models/burger.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private _orderDB: (Burger | Drink)[] = [
    {
      _id: 'p123',
      type: 'burger',
      name: 'Jack`o',
      price: 25,
      about:
        'Three ¼ lb* flame-grilled beef patties with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun. *Weight based on pre-cooked patty.',
    },
  ];

  private _order$ = new BehaviorSubject<(Burger | Drink)[]>([]);
  public order$ = this._order$.asObservable();

  public query() {
    const orders = this._orderDB;
    this._order$.next(orders);
  }

  public remove(itemId: string) {
    const order = this._orderDB;
    const burgerIdx = order.findIndex((item) => item._id === itemId);
    order.splice(burgerIdx, 1);
    this._order$.next(order);
    return of({});
  }

  public add(item: Burger | Drink) {
    this._orderDB.push(item);
    this._order$.next(this._orderDB);
    console.log(this._order$);

    return of(item);
  }

  public getNumOfItem() {
    return of(this._orderDB.length);
  }

  public getTotalAmount() {
    return this._orderDB.reduce((acc, order) => {
      if ('price' in order && typeof order.price === 'number') {
        return order.price + acc;
      }
      return acc;
    }, 0);
  }
}
