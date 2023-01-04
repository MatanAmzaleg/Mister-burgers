import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Drink, DrinkFilter } from '../models/burger.model';


@Injectable({
    providedIn: 'root'
})
export class DrinkService {
    constructor(private http: HttpClient) { }

    // Mock the database
    private _drinksDb: Drink[] = [
        { _id: 'p23', type:'drink', name: 'Jack`o', price: 13, about: "Three ¼ lb* flame-grilled beef patties with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun. *Weight based on pre-cooked patty." },
        { _id: 'p24', type:'drink', name: 'Rapier', price: 7, about: "Two flame-grilled beef patties topped with crisp lettuce, sliced white onion, crunchy pickles, melty American cheese and our signature stacker sauce on a toasted sesame seed bun." },
        { _id: 'p25', type:'drink', name: 'O`cheese', price: 12, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p26', type:'drink', name: 'Shock', price: 12, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p27', type:'drink', name: 'Bride', price: 20, about: "1/2 lb. of flame-grilled beef topped with melty American cheese, crispy bacon, juicy tomatoes, crisp lettuce, sliced white onions, cruncy pickles, jalapenos, creamy mayonnaise, yellow mustard on a toasted sesame seed bun." },
        { _id: 'p28', type:'drink', name: 'Popovich', price: 18, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
        { _id: 'p29', type:'drink', name: 'Popovich', price: 17, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
        { _id: 'p30', type:'drink', name: 'Popovich', price: 15, about: "A flame-grilled beef patty with sweet and smoky BBQ sauce and crispy onion rings on a toasted sesame seed bun." },
    ];

    private _drinks$ = new BehaviorSubject<Drink[]>([]);
    public drinks$ = this._drinks$.asObservable()

    private _drinkFilter$ = new BehaviorSubject<DrinkFilter>({ term: '' });
    public drinkFilter$ = this._drinkFilter$.asObservable()


    public query() {
        const filterBy = this._drinkFilter$.value
        const drinks = this._drinksDb.filter(({ name }) => {
            return name.toLowerCase().includes(filterBy.term.toLowerCase());
        });
        this._drinks$.next(drinks);
    }



    public getEmptyDrink() {
        return { name: '', price: 0, about: "" }
    }

    public remove(drinkId: string) {
        const drinks = this._drinksDb
        const drinkIdx = drinks.findIndex(drink => drink._id === drinkId)
        drinks.splice(drinkIdx, 1)
        this._drinks$.next(drinks);
        return of({})
    }

    public getById(drinkId: string): Observable<Drink> {
        const drink = this._drinksDb.find(drink => drink._id === drinkId)
        return drink ? of({ ...drink }) : of()
    }

    public save(drink: Drink) {
        return drink._id ? this._edit(drink) : this._add(drink)
    }

    public setFilter(drinkFilter: DrinkFilter) {
        this._drinkFilter$.next(drinkFilter)
        this.query()
    }

    private _add(drink: Drink) {
        drink._id = this._makeId()
        this._drinksDb.push(drink)
        this._drinks$.next(this._drinksDb)
        return of(drink)
    }

    private _edit(drink: Drink) {
        const drinks = this._drinksDb
        const drinkIdx = drinks.findIndex(_drink => _drink._id === drink._id)
        drinks.splice(drinkIdx, 1, drink)
        this._drinks$.next(drinks)
        return of(drink)
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
