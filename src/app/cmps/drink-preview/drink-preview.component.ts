import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drink } from 'src/app/models/burger.model';

@Component({
    selector: 'drink-preview',
    templateUrl: './drink-preview.component.html',
    styleUrls: ['./drink-preview.component.scss']
})
export class DrinkPreviewComponent {
    @Input() drink!: Drink
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()


    onSelectDrinkId() {
        this.onSelect.emit(this.drink._id)
    }

    onRemoveDrink(ev: MouseEvent) {
        ev.stopPropagation()
        this.onRemove.emit(this.drink._id)
    }
}
