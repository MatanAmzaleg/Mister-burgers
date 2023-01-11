import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],
})
export class PayComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  totalAmount : number = 0

  ngOnInit(): void {
    this.totalAmount = this.orderService.getTotalAmount() 
  }


}
