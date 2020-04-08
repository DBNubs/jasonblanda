import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('body').classList.add('twitch');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('twitch');
  }

}
