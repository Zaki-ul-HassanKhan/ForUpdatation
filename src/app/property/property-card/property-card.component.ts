import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent{

 @Input() property: any;
 ngOnInit(){
  console.log("vLue",this.property)
 }
}
