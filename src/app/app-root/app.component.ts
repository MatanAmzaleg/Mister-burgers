import { Component } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public orderService:OrderService){}

    faHamburger = faHamburger
    title = 'inClass-burgers';

    getItemsNum(){
        return this.orderService.getNumOfItem()
    }
}
