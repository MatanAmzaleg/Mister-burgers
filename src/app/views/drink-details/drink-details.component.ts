import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Burger, Drink } from 'src/app/models/burger.model';
import { DrinkService } from 'src/app/services/drink.service';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';

@Component({
    selector: 'drink-details',
    templateUrl: './drink-details.component.html',
    styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

    constructor(private drinkService: DrinkService, private orderService:OrderService) { }

    faHamburger = faHamburger
    @Input() drinkId!: string
    drink: Drink | undefined

    async ngOnInit(): Promise<void> {
        const drink = await lastValueFrom(this.drinkService.getById(this.drinkId))
        this.drink = drink
    }
    
    onAddToOrder(drink : Drink){
        this.orderService.add(drink)
    }

}
