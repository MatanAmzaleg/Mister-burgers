import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { Burger, Drink } from 'src/app/models/burger.model';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  constructor(private router:Router){}

  @Input() order! : (Burger| Drink)[] | null

  faHamburger = faHamburger

ngOnInit(): void {
  
}

onNavigatePay(){
  this.router.navigate(['order/pay']);
}

}
