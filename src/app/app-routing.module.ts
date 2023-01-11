import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './cmps/about/about.component';
import { BurgerDetailsComponent } from './views/burger-details/burger-details.component';
import { BurgerIndexComponent } from './views/burger-index/burger-index.component';
import { DrinkDetailsComponent } from './views/drink-details/drink-details.component';
import { DrinkIndexComponent } from './views/drink-index/drink-index.component';
import { OrderComponent } from './views/order/order.component';
import { PayComponent } from './views/pay/pay.component';

const routes: Routes = [
  {
    path: 'burger/:id',
    component: BurgerDetailsComponent,
  },
  {
    path: 'drinks/:id',
    component: DrinkDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'drinks',
    component: DrinkIndexComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
    children: [{ path: 'pay', component: PayComponent }],
  },
  {
    path: '',
    component: BurgerIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
