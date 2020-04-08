import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-homepage-webdev-hero',
  templateUrl: './homepage-webdev-hero.component.html',
  styleUrls: ['./homepage-webdev-hero.component.scss']
})
export class HomepageWebdevHeroComponent implements OnInit {
  blog: any;
  
  constructor(private apiService: ApiService) {
     this.apiService.getNewestBlog().subscribe((data) => {
      this.blog = data;
     });
   }

  ngOnInit(): void {
    document.getElementById('body').classList.add('front');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('front');
  }

}
