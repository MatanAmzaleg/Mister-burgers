import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Burger, BurgerFilter } from '../models/burger.model';


@Injectable({
    providedIn: 'root'
})
export class BurgerService {
    constructor(private http: HttpClient) { }

    // Mock the database
    private _burgersDb: Burger[] = [
        { _id: 'p123', type:'burger', name: 'Jack`o', price: 25, about: "Three ¼ lb* flame-grilled beef patties with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun. *Weight based on pre-cooked patty." },
        { _id: 'p124', type:'burger', name: 'Rapier', price: 17, about: "Two flame-grilled beef patties topped with crisp lettuce, sliced white onion, crunchy pickles, melty American cheese and our signature stacker sauce on a toasted sesame seed bun." },
        { _id: 'p125', type:'burger', name: 'O`cheese', price: 22, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p126', type:'burger', name: 'Popovich', price: 20, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
        { _id: 'p126', type:'burger', name: 'Palawan', price: 17, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p127', type:'burger', name: 'Rico', price: 21, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
        { _id: 'p128', type:'burger', name: 'Jumbo', price: 28, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p129', type:'burger', name: 'Stamina', price: 24, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
    ];

    private _burgers$ = new BehaviorSubject<Burger[]>([]);
    public burgers$ = this._burgers$.asObservable()

    private _burgerFilter$ = new BehaviorSubject<BurgerFilter>({ term: '' });
    public burgerFilter$ = this._burgerFilter$.asObservable()


    public query() {
        const filterBy = this._burgerFilter$.value
        const burgers = this._burgersDb.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.term.toLowerCase());
        });
        this._burgers$.next(burgers);
    }


    public getEmptyBurger() {
        return { name: '', age: 0, birthDate: new Date() }
    }

    public remove(burgerId: string) {
        const burgers = this._burgersDb
        const burgerIdx = burgers.findIndex(burger => burger._id === burgerId)
        burgers.splice(burgerIdx, 1)
        this._burgers$.next(burgers);
        return of({})
    }

    public getById(burgerId: string): Observable<Burger> {
        const burger = this._burgersDb.find(burger => burger._id === burgerId)
        return burger ? of({ ...burger }) : of()
    }

    public save(burger: Burger) {
        return burger._id ? this._edit(burger) : this._add(burger)
    }

    public setFilter(burgerFilter: BurgerFilter) {
        this._burgerFilter$.next(burgerFilter)
        this.query()
    }

    private _add(burger: Burger) {
        burger._id = this._makeId()
        this._burgersDb.push(burger)
        this._burgers$.next(this._burgersDb)
        return of(burger)
    }

    private _edit(burger: Burger) {
        const burgers = this._burgersDb
        const burgerIdx = burgers.findIndex(_burger => _burger._id === burger._id)
        burgers.splice(burgerIdx, 1, burger)
        this._burgers$.next(burgers)
        return of(burger)
    }

    private _makeId(length = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
