import { Component, EventEmitter, Input, Output,  ViewChild} from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { Burger } from 'src/app/models/burger.model';

@Component({
    selector: 'burger-list',
    templateUrl: './burger-list.component.html',
    styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent {
    masonryOptions:NgxMasonryOptions = {gutter:30, columnWidth:370}

    @ViewChild(NgxMasonryComponent, { static: false }) masonry:
        | NgxMasonryComponent
        | any;

    @Input() burgers!: Burger[] | null
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()


}
