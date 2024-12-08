import { Component, OnInit } from '@angular/core';

export class Product {  
  _id!: string;  
  name!: string;  
  imageUrl!: string;  
  description!: string;  
  location!: string;  
  contact!: string;  
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit { 
  constructor() { } 
  product: Product = { 
      _id: '674e161c8c5e2bb65d145219', 
      name: 'Pair of Chairs', 
      imageUrl: 'https://github.com/EmmaNyamekye/FurnishUp/blob/main/public/images/chairs_image.png?raw=true', 
      description: 'Warm and inviting acacia wood chairs, perfect for adding a touch of nature to your outdoor space.', 
      location: 'Tralee', 
      contact: 'maria.rossella@example.com'
  }; 
  ngOnInit() { } 
}
