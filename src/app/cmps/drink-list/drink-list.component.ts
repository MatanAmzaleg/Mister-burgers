import { Component, EventEmitter, Input, Output,  ViewChild} from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { Drink } from 'src/app/models/burger.model';

@Component({
    selector: 'drink-list',
    templateUrl: './drink-list.component.html',
    styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {
    masonryOptions:NgxMasonryOptions = {gutter:30, columnWidth:370}

    @ViewChild(NgxMasonryComponent, { static: false }) masonry:
        | NgxMasonryComponent
        | any;

    @Input() drinks!: Drink[] | null
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()



}
