import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Burger } from 'src/app/models/burger.model';
import { Router } from '@angular/router';


@Component({
    selector: 'burger-preview',
    templateUrl: './burger-preview.component.html',
    styleUrls: ['./burger-preview.component.scss']
})
export class BurgerPreviewComponent {
    constructor(private router:Router) {}
    @Input() burger!: Burger
    @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()



    onSelectBurgerId() {
        this.router.navigate([`burger/${this.burger._id}`])
    }

    onRemoveBurger(ev: MouseEvent) {
        ev.stopPropagation()
        this.onRemove.emit(this.burger._id)
    }
}
