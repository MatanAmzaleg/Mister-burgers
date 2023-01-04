import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { BurgerIndexComponent } from './views/burger-index/burger-index.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgerListComponent } from './cmps/burger-list/burger-list.component';
import { BurgerPreviewComponent } from './cmps/burger-preview/burger-preview.component';
import { BurgerDetailsComponent } from './views/burger-details/burger-details.component';
import { BurgerFilterComponent } from './cmps/burger-filter/burger-filter.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './cmps/about/about.component';
import { DrinkDetailsComponent } from './views/drink-details/drink-details.component';
import { DrinkFilterComponent } from './cmps/drink-filter/drink-filter.component';
import { DrinkListComponent } from './cmps/drink-list/drink-list.component';
import { DrinkIndexComponent } from './views/drink-index/drink-index.component';
import { DrinkPreviewComponent } from './cmps/drink-preview/drink-preview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './views/order/order.component';
import { OrderListComponent } from './cmps/order-list/order-list.component';
import { OrderPreviewComponent } from './cmps/order-preview/order-preview.component';
import { PayComponent } from './views/pay/pay.component';
import { ModelDrivenComponent } from './cmps/model-driven/model-driven.component';




@NgModule({
    declarations: [
        AppComponent,
        BurgerIndexComponent,
        BurgerListComponent,
        BurgerPreviewComponent,
        BurgerDetailsComponent,
        BurgerFilterComponent,
        AboutComponent,
        DrinkDetailsComponent,
        DrinkFilterComponent,
        DrinkListComponent,
        DrinkIndexComponent,
        DrinkPreviewComponent,
        OrderComponent,
        OrderComponent,
        OrderListComponent,
        OrderPreviewComponent,
        PayComponent,
        ModelDrivenComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        NgxMasonryModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
