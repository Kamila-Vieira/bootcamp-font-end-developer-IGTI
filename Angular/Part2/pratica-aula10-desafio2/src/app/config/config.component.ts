import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  exerciseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    duration: new FormControl(30, Validators.required),
    repetitions: new FormControl(3, Validators.required),
    preparation: new FormControl(15, Validators.required),
    rest: new FormControl(30, Validators.required)
  });

  constructor(public ts: TimerService) { }

  add() {
    const exercise = this.exerciseForm.value;
    this.ts.add(exercise);
    this.exerciseForm.reset({ ...exercise, name: '' });
  }

  delete(i: number) {
    this.ts.delete(i);
  }
}
