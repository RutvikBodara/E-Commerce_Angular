import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:
  {
    id:number,
    name:string,
    description:string,
    price:number,
    category:string,
    discount?:number,
    imageUrl:string,
  };
}
