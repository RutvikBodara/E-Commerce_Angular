import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  
  searchString :string=""
  @Output()
  onSearchChanged :EventEmitter<string> = new EventEmitter<string>()
  onSearch(){
    this.onSearchChanged.emit(this.searchString)
  }
}
