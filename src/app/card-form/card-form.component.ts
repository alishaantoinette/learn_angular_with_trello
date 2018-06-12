import { Component, OnInit } from '@angular/core';

import { Card } from '../card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  constructor() { }

  model = new Card(1, 'Is this working?');

  submitted = false;
  onSubmit() {
    this.submitted = true
  }

  ngOnInit() {
  }

}
