import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bjj',
  templateUrl: './bjj.component.html',
  styleUrls: ['./bjj.component.scss']
})
export class BjjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('body').classList.add('bjj');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('bjj');
  }

}
