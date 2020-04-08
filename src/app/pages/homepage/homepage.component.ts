import { Component, OnInit } from '@angular/core';
import { HostListener} from "@angular/core";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(document.getElementById('container').scrollTop + " | " + document.getElementById('twitch').offsetTop);
    if(document.getElementById('container').scrollTop >= document.getElementById('twitch').offsetTop) {
      document.getElementById('body').classList.add('white');
    } else {
      document.getElementById('body').classList.remove('white');
    }
  }

  constructor() { 
    
  }

  ngOnInit(): void { 
  }

}
