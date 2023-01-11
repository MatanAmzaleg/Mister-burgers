import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drink } from 'src/app/models/burger.model';
import { Router } from '@angular/router';

@Component({
  selector: 'drink-preview',
  templateUrl: './drink-preview.component.html',
  styleUrls: ['./drink-preview.component.scss'],
})
export class DrinkPreviewComponent {
  constructor(private router: Router) {}

  @Input() drink!: Drink;
  @Output() onSelect = new EventEmitter<string>();
  @Output() onRemove = new EventEmitter<string>();

  onSelectDrinkId() {
    this.router.navigate([`drinks/${this.drink._id}`]);
    // this.onSelect.emit(this.drink._id)
  }

  onRemoveDrink(ev: MouseEvent) {
    ev.stopPropagation();
    this.onRemove.emit(this.drink._id);
  }
}
