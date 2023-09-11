import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CalculatorModel } from './calculatorModel';

@Component({  
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService],
})
export class CalculatorComponent {

buttons:any=new CalculatorModel();
functionButtons=this.buttons.functionButtons;
numberButtons=this.buttons.numberButtons;
operationButtons=this.buttons.operationButtons;


  
  constructor(private calculatorService: CalculatorService, private router:Router) {}
  numberValue: string = '';
  userNotAllowed: boolean=false;

  public get displayValue(): string {
    return this.calculatorService.getCurrentValue();
  }
  public handleButtonClick(buttonData: any): void {
    if (buttonData.type == 'NUMBER') {
      this.numberValue = this.numberValue + buttonData.value;
    }
    if (buttonData.type == 'OPERATION' && buttonData.sign != '=') {
      this.numberValue = '';
    }

    if (buttonData.value == 'EQUAL' && this.numberValue != '') {
      console.log('Sending data to addToDispaly before switch');
      this.calculatorService.addToDisplay('NUMBER', this.numberValue, '=');
      this.numberValue = '';
      this.calculatorService.clear();
    }

    switch (buttonData.type) {
      case 'NUMBER':
      case 'OPERATION':
        if (buttonData.type == 'OPERATION' && buttonData.value == 'EQUAL') {
          const clickedButtonArray = this.calculatorService.getClickedButtons();
          console.log(clickedButtonArray);  
          const jsonRequestBdy = JSON.stringify(clickedButtonArray);
          console.log(jsonRequestBdy);
          this.calculatorService.calculate(jsonRequestBdy).subscribe(
            (response) => {
              let finalResult: string = response.toString();
              console.log('In response');
              this.calculatorService.clearClickedButtons();
              this.calculatorService.clear();
              this.calculatorService.addToDisplay(
                'OUTPUTNUMBER',
                finalResult,
                finalResult
              );
              console.log('Result:', response);
            },
            (error) => {
              console.error('Error:', error);
              console.log('In Error');
              // this.router.navigate(['/login']);
              this.userNotAllowed=true;
            } 
          );
        } else {
          this.calculatorService.addToDisplay(
            buttonData.type,
            buttonData.value,
            buttonData.sign
          );
        }
        break;
      case 'FUNCTION':
        if (buttonData.value == 'C') {
          this.calculatorService.deleteLastCharacter();
        } else if (buttonData.value == 'AC') {
          this.calculatorService.clearClickedButtons();
          this.calculatorService.clear();
        } else if (buttonData.value == 'UNDO') {
          this.calculatorService.undoOperation();
        } else {
          this.calculatorService.redoOperation();
        }
        break;
      default:
        break;
    }
  }
}














//   this.http.post<number>('/calc3',clickedButtonArray).subscribe((response:number)=>{
//     console.log("Result: ",response);
//   let finalResult:string=response.toString();
//     this.calculatorService.clearClickedButtons();
//     this.calculatorService.addToDisplay('NUMBER',finalResult);
//   },
//   (error) => {
//     console.error('Error:', error);
//   }
// );
