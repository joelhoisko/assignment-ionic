import {Component, Input} from '@angular/core';

@Component({
  selector: 'timer-list-item',
  templateUrl: 'timer-list-item.component.html'
})
export class TimerListItem {

  @Input()
  timerValue: number;

}
