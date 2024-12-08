import { Component } from '@angular/core';
import { FurnishUpDataService } from '../furnish-up-data.service'; 

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [FurnishUpDataService]
})
export class AboutComponent {
  constructor(private FurnishUpDataService: FurnishUpDataService) { } 
}

