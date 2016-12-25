import { Component } from '@angular/core';
import { TimerStartPage } from '../timer-start-page/timer-start-page.component';

@Component({
  selector: 'timer-root',
  templateUrl: 'timer-root.component.html'
})
export class TimerRoot {
  rootPage = TimerStartPage;
}
