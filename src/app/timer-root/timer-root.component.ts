import {Component} from '@angular/core';
import {TimerListPage} from "../timer-list-page/timer-list-page.component";

@Component({
  selector: 'timer-root',
  templateUrl: 'timer-root.component.html'
})
export class TimerRoot {
  rootPage = TimerListPage;
}