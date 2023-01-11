import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Burger } from 'src/app/models/burger.model';
import { BurgerService } from 'src/app/services/burger.service';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.scss'],
})
export class BurgerDetailsComponent implements OnInit {
  constructor(
    private burgerService: BurgerService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  faHamburger = faHamburger;

  @Input() burgerId!: string;
  burger: Burger | undefined;

  async ngOnInit(): Promise<void> {
    console.log('ok');


    this.route.params.subscribe((params) => {
      this.burgerId = params['id'];
    });

    
    console.log(this.burgerId);
    
    const burger = await lastValueFrom(
        this.burgerService.getById(this.burgerId)
        );
        this.burger = burger;
  }

  onAddToOrder(burger: Burger) {
    console.log(burger);
    this.orderService.add(burger);
    this.router.navigate(['']);
  }
}
