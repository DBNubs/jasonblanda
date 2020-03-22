import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: any;

  constructor(private apiService: ApiService) {
    this.apiService.getPortfolio().subscribe((data) => {
      this.portfolio = data;
    })
   }

  ngOnInit(): void {
  }

}