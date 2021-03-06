import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '784bdb7f8e16d58d0e087aa39a16e7cb';

  constructor(private httpClient: HttpClient) { }

  public getPortfolio() {
    return this.httpClient.get(`http://api.jasonblanda.com/portfolio?key_auth=${this.API_KEY}`);
  }

  public getPortfolioFeatured() {
    return this.httpClient.get(`http://api.jasonblanda.com/portfolio-featured?key_auth=${this.API_KEY}`);
  }

  public getBlogs() {
    return this.httpClient.get(`http://api.jasonblanda.com/web-development?key_auth=${this.API_KEY}`);
  }

  public getNewestBlog() {
    return this.httpClient.get(`http://api.jasonblanda.com/web-development/newest?key_auth=${this.API_KEY}`);
  }

  public getSingleNode(id: string) {
    return this.httpClient.get(`http://api.jasonblanda.com/json-node/${id}?key_auth=${this.API_KEY}`);
  }

}
