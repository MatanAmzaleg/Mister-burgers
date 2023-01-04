import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Burger } from 'src/app/models/burger.model';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
    selector: 'burger-index',
    templateUrl: './burger-index.component.html',
    styleUrls: ['./burger-index.component.scss']
})
export class BurgerIndexComponent implements OnInit, OnDestroy {

    constructor(private burgerService: BurgerService) { }

    burgers!: Burger[]
    burgers$!: Observable<Burger[]>
    selectedBurgerId = ''

    prm = Promise.resolve(1000)

    subscription!: Subscription

    onSelectBurgerId(burgerId: string) {
        this.selectedBurgerId = burgerId
    }

    onRemoveBurger(burgerId: string) {
        this.burgerService.remove(burgerId)
    }

    ngOnInit(): void {

        this.burgerService.query()
        this.burgers$ = this.burgerService.burgers$
        // this.subscription = this.burgerService.burgers$.subscribe(burgers => {
        //     this.burgers = burgers
        // })

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }


}
