import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('body').classList.add('contact');
  }

  ngOnDestroy(): void {
    document.getElementById('body').classList.remove('contact');
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ' , form.value);
  }

}
