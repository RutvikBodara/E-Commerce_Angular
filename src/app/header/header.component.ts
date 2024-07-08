import { Component } from "@angular/core";
import { SubheaderComponent } from "../subheader/subheader.component";
@Component({
    selector:'app-header',
    //  template:'<h1>Tu taru kam kar</h1>',
    templateUrl:'header.component.html',
    styleUrl:'header.component.css',
    imports:[SubheaderComponent],
    standalone:true,
})
export class Headercomponent{

}