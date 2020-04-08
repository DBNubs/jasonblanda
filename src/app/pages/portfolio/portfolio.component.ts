import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  portfolioFeatured: any;

  hasImage: boolean;
  hasLink: boolean;

  constructor(private apiService: ApiService) {
    this.apiService.getPortfolio().subscribe((data) => {
      this.portfolio = data;
    });
    
    this.apiService.getPortfolioFeatured().subscribe((data) => {
      this.portfolioFeatured = data;
    });
   }
   

   ngOnInit(): void {
    document.getElementById('body').classList.add('portfolio');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('portfolio');
  }

}
