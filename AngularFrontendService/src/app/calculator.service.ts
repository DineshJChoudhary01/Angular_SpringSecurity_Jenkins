
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class CalculatorService {
  constructor(private http: HttpClient, private router:Router) { }

private apiUrl = 'http://localhost:8080/BackendForcalculator/calc3';
private apiUrl1 = 'http://localhost:8080/BackendForcalculator/login';


  calculate(data: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, data);
  }

  sendUserData(body:any): Observable<any> {

    return this.http.post<any>(this.apiUrl1,body);
  }

  private currentValue: string = '';
  numberType: string = '';
  numberValue: string = '';
  resultNumber:number=0;
  undoArray:string[]=[]
  redoArray:string[]=[]
  
  currentValueUpdated: EventEmitter<string> = new EventEmitter<string>();

  private clickedButtons: {type:string,value:string}[]=[];

  public getCurrentValue(): string {
    return this.currentValue;
  }

  public addToDisplay(type:string,value:string,sign:string): void {

    if(type=="NUMBER" && sign!="=" || type=="OUTPUTNUMBER"){
        this.numberValue=this.numberValue+value;
        this.numberType=type;
        if(type=="OUTPUTNUMBER"){
          this.undoArray.push(this.numberValue)
          this.redoArray.push(this.numberValue)
        }

    }else if(type=="OPERATION" && sign!="="){
      this.clickedButtons.push({type:"NUMBER",value:this.numberValue});
      this.clickedButtons.push({type,value});
      this.numberType = '';
      this.numberValue=''
    }
    if(type=="NUMBER" && sign=="="){
      this.clickedButtons.push({type,value});
      this.currentValue='';
      this.numberValue='';
      this.numberType='';
    }

    this.currentValue = this.currentValue + sign;
    console.log(this.clickedButtons)
    this.currentValueUpdated.emit(this.currentValue);
  }

  public deleteLastCharacter(): void {
    this.currentValue = this.currentValue.slice(0, -1);
    this.numberValue=this.numberValue.substring(0,this.numberValue.length-1);
    this.clickedButtons.pop();

    this.currentValueUpdated.emit(this.currentValue);
  }

  public clear(): void {
    this.currentValue = '';
    this.currentValueUpdated.emit(this.currentValue);
  }

  public getClickedButtons():{type:string,value:string}[]{
    return this.clickedButtons;
  }
  public clearClickedButtons():void{
    this.clickedButtons=[];
    this.numberValue='';
    this.numberType='';
  }
  public undoOperation(): void {
      this.resultNumber+=1;
      this.currentValue=this.undoArray[this.undoArray.length-this.resultNumber];
      this.currentValueUpdated.emit(this.currentValue);
  }
  public redoOperation(): void {
    this.resultNumber-=1;
    this.currentValue=this.redoArray[this.redoArray.length-this.resultNumber]
    this.currentValueUpdated.emit(this.currentValue);
  }

}