import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger, Drink } from 'src/app/models/burger.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{
 constructor(private orderService: OrderService){}
 order!: (Burger | Drink)[] 
 order$!: Observable<(Burger | Drink)[]>

 ngOnInit(){
  this.orderService.query()
  this.order$ = this.orderService.order$
  console.log(this.order$);
  
 }

 ngOnDestroy(): void {
   
 }
}
