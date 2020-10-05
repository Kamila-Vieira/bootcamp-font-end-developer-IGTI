import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() max: number;
  counter: number = 0;

  constructor() {
    console.log(`CounterComponent label=${this.label}, max=${this.max}`);
  }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + JSON.stringify(changes));
  }

}
