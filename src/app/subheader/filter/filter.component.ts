import { Component,EventEmitter,Input, Output, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number =0
  @Input()
  inStock:number=0
  @Input()
  outOfStock:number=0
  
  selectedValueProperty:string = 'all'

  @Output()
  filterChange :EventEmitter<string> = new EventEmitter<string>()
  onFilterChange(value){
    this.filterChange.emit(value.target.value)
  }

}
