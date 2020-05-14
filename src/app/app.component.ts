import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  customInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = this.formBuilder.group(
      {
        email: [''],
        fullname: ['Madan'],
        phone: [{
          value: '080 - 898989889',
          disabled: false
        }]
      },
  
    );
  }
}
