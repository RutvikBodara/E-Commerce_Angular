import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

// @Component({
//   selector: 'app-subheader',
//   standalone: true,
//   imports: [SearchbarComponent],
//   templateUrl: './subheader.component.html',
//   styleUrl: './subheader.component.css'
// })
// @Component({
//   selector: '.app-subheader',
//   standalone: true,
//   imports: [SearchbarComponent],
//   templateUrl: './subheader.component.html',
//   styleUrl: './subheader.component.css'
// })
@Component({
  selector: '[app-subheader]',
  standalone: true,
  imports: [SearchbarComponent,CommonModule,ProductComponent],
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {

  products = [
    { id: 1, name: 'Laptop', description: 'A high-performance laptop', price: 999.99, category: 'Electronics',discount:10,imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
    { id: 2, name: 'Smartphone', description: 'A latest-generation smartphone', price: 799.99, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199.99, category: 'Accessories',discount:22, imageUrl: 'assets/Images/ds-head-phone.jpg' },
    { id: 4, name: 'Smartwatch', description: 'A smartwatch with various features', price: 299.99, category: 'Wearables', imageUrl: 'assets/Images/smartwatch.jpg' },
    { id: 5, name: 'Tablet', description: 'A lightweight tablet with a sharp display', price: 499.99, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    { id: 6, name: 'Camera', description: 'A DSLR camera for photography enthusiasts', price: 1199.99, category: 'Cameras', imageUrl: 'assets/Images/camera.jpg' },
    { id: 7, name: 'Gaming Console', description: 'A next-gen gaming console', price: 499.99, category: 'Gaming',discount:85, imageUrl: 'assets/Images/gamingconsole.webp' },
    { id: 8, name: 'Bluetooth Speaker', description: 'A portable Bluetooth speaker', price: 99.99, category: 'Accessories', imageUrl: 'assets/Images/speaker.webp' },
    { id: 9, name: 'E-book Reader', description: 'An e-book reader with a glare-free display', price: 129.99, category: 'Books', imageUrl: 'assets/Images/BookReader.webp' },
    { id: 10, name: 'Fitness Tracker', description: 'A fitness tracker with heart rate monitor', price: 149.99, category: 'Wearables', imageUrl: 'assets/Images/Fitnesstracker.jpg' }
  ];

  names :string[] = ["john","jorden","jay"]
  inCart:number =1
  decrementDisplay:boolean =false;
  incrementDisplay:boolean =false;
   product ={
    image:"assets/Images/images.jpg",
    name:"dumble",
    price:10,
    discount:10,
    stock:5
  }
  onInput(event:any){
    this.product.name = event.target.value;
  }

  getDiscountPrice(){
    return ((this.product.price *(100 - this.product.discount))/100)
  }
  onIncrement(){
    if(this.inCart < this.product.stock){
 
      this.decrementDisplay=false
      this.inCart++;
      if(this.inCart == this.product.stock){
        this.incrementDisplay =true
      }
    }
  }
  onDecrement(){
    if(this.inCart > 1){
      this.incrementDisplay =false
      this.inCart--;
      if(this.inCart == 1){
        this.decrementDisplay=true
      }
    }
  }
}
