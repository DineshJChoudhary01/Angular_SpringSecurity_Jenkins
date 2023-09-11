import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ButtonsComponent } from './components/calculator/buttons/buttons.component';
import { FunctionComponent } from './components/calculator/buttons/function/function.component';
import { NumericComponent } from './components/calculator/buttons/numeric/numeric.component';
import { OperationComponent } from './components/calculator/buttons/operation/operation.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { CalculatorService } from './calculator.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpInterceptor } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonsComponent,
    FunctionComponent,
    NumericComponent,
    OperationComponent,
    DisplayComponent,
    LoginComponent,
    LogoutComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    CalculatorService,
  HttpClient], 
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { TestBed } from '@angular/core/testing';
// import { CalculatorService } from './calculator.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// describe('CalculatorService', () => {
//   let service: CalculatorService;
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule], // Import HttpClientTestingModule for mocking HTTP requests
//       providers: [CalculatorService],
//     });
//     service = TestBed.inject(CalculatorService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should send a POST request to calculate', () => {
//     const requestData = { /* create your request data here */ };
//     service.calculate(requestData).subscribe((response) => {
//       // Write assertions for the response
//     });

//     const req = httpTestingController.expectOne('http://localhost:8080/BackendForcalculator/calc3');
//     expect(req.request.method).toBe('POST');
//     req.flush(/* provide a mock response here */);
//   });

//   // Write more test cases for other methods of CalculatorService
// });



// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CalculatorComponent } from './calculator.component';
// import { CalculatorService } from 'src/app/calculator.service';

// describe('CalculatorComponent', () => {
//   let component: CalculatorComponent;
//   let fixture: ComponentFixture<CalculatorComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CalculatorComponent],
//       providers: [CalculatorService], // Mock or provide a real CalculatorService here
//     });
//     fixture = TestBed.createComponent(CalculatorComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should handle button clicks and interact with CalculatorService', () => {
//     const calculatorService = TestBed.inject(CalculatorService); // Inject CalculatorService
//     // Write test logic to simulate button clicks and check interactions with CalculatorService
//   });

//   // Write more test cases for CalculatorComponent
// });
