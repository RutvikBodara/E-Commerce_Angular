import { Component, Input, input } from '@angular/core';
import { ProductComponent } from '../product/product.component' 
import { product } from '../../../Model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
@Input()
currentProductDetail : product =undefined;  

product:product;
//to do initilization
 ngOnInit(){
  this.product= this.currentProductDetail
 }
 ngOnChange(){
  this.product= this.currentProductDetail
 }
}

