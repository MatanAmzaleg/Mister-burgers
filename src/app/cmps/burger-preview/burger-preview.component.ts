import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Burger } from 'src/app/models/burger.model';


@Component({
    selector: 'burger-preview',
    templateUrl: './burger-preview.component.html',
    styleUrls: ['./burger-preview.component.scss']
})
export class BurgerPreviewComponent {
    @Input() burger!: Burger
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()



    onSelectBurgerId() {
        this.onSelect.emit(this.burger._id)
    }

    onRemoveBurger(ev: MouseEvent) {
        ev.stopPropagation()
        this.onRemove.emit(this.burger._id)
    }
}
