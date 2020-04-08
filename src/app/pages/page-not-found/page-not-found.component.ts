import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('body').classList.add('not-found');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('not-found');
  }

}
