import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  
})
export class DisplayComponent implements OnInit {
  displayValue: string = '0';

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.currentValueUpdated.subscribe((value: string) => {
      this.displayValue = value;
    });
  }
}
