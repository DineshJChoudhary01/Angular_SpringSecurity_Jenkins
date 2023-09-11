import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() button: any;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  onButtonClick() {
    this.buttonClick.emit(this.button);
  }
}
