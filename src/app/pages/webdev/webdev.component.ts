import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss']
})
export class WebdevComponent implements OnInit {
  blogs: any;

  constructor(private apiService: ApiService) {
    this.apiService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
   }

   ngOnInit(): void {
    document.getElementById('body').classList.add('web-dev');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('web-dev');
  }

}
