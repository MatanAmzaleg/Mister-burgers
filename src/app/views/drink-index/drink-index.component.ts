import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Drink } from 'src/app/models/burger.model';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
    selector: 'drink-index',
    templateUrl: './drink-index.component.html',
    styleUrls: ['./drink-index.component.scss']
})
export class DrinkIndexComponent implements OnInit, OnDestroy {

    constructor(private drinkService: DrinkService) { }

    drinks!: Drink[]
    drinks$!: Observable<Drink[]>
    selectedDrinkId = ''

    prm = Promise.resolve(1000)

    subscription!: Subscription

    onSelectDrinkId(drinkId: string) {
        this.selectedDrinkId = drinkId
    }

    onRemoveDrink(drinkId: string) {
        this.drinkService.remove(drinkId)
    }

    ngOnInit(): void {

        this.drinkService.query()
        this.drinks$ = this.drinkService.drinks$
        // this.subscription = this.drinkService.drinks$.subscribe(drinks => {
        //     this.drinks = drinks
        // })

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }


}
