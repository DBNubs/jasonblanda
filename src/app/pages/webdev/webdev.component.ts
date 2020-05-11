import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss']
})
export class WebdevComponent implements OnInit {
  blogs: any;

  constructor(private apiService: ApiService, private router: Router) {
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

  goToArticle(title: string, id: any): void {
    title = title.replace(/\s/g, '-');
    title = title.replace(')', '-');
    title = title.replace('(', '-');
    title = title.toLowerCase();
    this.router.navigateByUrl('/web-development/' + title, id);
  }

}
