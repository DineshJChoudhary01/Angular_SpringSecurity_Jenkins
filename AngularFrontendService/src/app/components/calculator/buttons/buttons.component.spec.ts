import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
    });
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;

    // Initialize the 'button' property with a mock object
    component.button = { sign: '+', value: 'ADDITION', type: 'OPERATION' };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the @Input property "button" correctly', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toContain('+');
  });

  it('should emit "buttonClick" event when button is clicked', () => {
    spyOn(component.buttonClick, 'emit');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(component.buttonClick.emit).toHaveBeenCalledWith(component.button);
  });
});
