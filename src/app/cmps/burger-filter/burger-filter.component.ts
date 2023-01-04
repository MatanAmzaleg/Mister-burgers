import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BurgerFilter } from 'src/app/models/burger.model';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
    selector: 'burger-filter',
    templateUrl: './burger-filter.component.html',
    styleUrls: ['./burger-filter.component.scss']
})
export class BurgerFilterComponent implements OnInit, OnDestroy {

    constructor(private burgerService: BurgerService) { }

    subscription!: Subscription


    burgerFilter!: BurgerFilter

    ngOnInit(): void {
        this.subscription = this.burgerService.burgerFilter$.subscribe(burgerFilter => {
            this.burgerFilter = burgerFilter
        })
    }

    onSetFilter() {
        this.burgerService.setFilter({ ...this.burgerFilter })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
