import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenNameValidator('Danilo')]),
    address: new FormControl('')
  });
  
  onSubmit() {
    console.log(this.myForm.value);
  }
}

export function forbiddenNameValidator(invalidName: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (control.value === invalidName) {
      return {forbiddenName: {value: control.value}};
    } else {
      return null;
    }
  };
}
