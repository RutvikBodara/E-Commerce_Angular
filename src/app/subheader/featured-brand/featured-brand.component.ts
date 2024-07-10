import { Component, ContentChild, contentChildren, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-featured-brand',
  standalone: true,
  imports: [],
  templateUrl: './featured-brand.component.html',
  styleUrl: './featured-brand.component.css'
})
export class FeaturedBrandComponent {

  @Input()
  name:string;

  @ContentChild('brandName') firstBrand :ElementRef
  @ContentChildren('brandName') firstBrands : QueryList<ElementRef>
  test(){
    console.log(this.firstBrand.nativeElement)
    this.firstBrands.forEach((item)=>{
      console.log(item.nativeElement)
    })
  }
  
}
