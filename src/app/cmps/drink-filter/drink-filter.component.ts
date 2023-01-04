import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrinkFilter } from 'src/app/models/burger.model';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
    selector: 'drink-filter',
    templateUrl: './drink-filter.component.html',
    styleUrls: ['./drink-filter.component.scss']
})
export class DrinkFilterComponent implements OnInit, OnDestroy {

    constructor(private drinkService: DrinkService) { }

    subscription!: Subscription


    drinkFilter!: DrinkFilter

    ngOnInit(): void {
        this.subscription = this.drinkService.drinkFilter$.subscribe(drinkFilter => {
            this.drinkFilter = drinkFilter
        })
    }

    onSetFilter() {
        this.drinkService.setFilter({ ...this.drinkFilter })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
