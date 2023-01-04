import { Component , Input, OnInit} from '@angular/core';
import { Burger, Drink } from 'src/app/models/burger.model';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {

  constructor(public orderService:OrderService) {}
  faXmark = faXmark

  @Input() item!:(Burger|Drink) | null


  ngOnInit(): void {
    
  }

  onRemoveItem(itemId:string ){
    this.orderService.remove(itemId)
  }

   isBurger(item: (Burger | Drink)) {    
    return (item.type === 'burger')
  }

}
