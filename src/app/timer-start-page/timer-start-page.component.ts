import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerListPage } from '../timer-list-page/timer-list-page.component';
import { TimerService } from '../timer.service';

@Component({
  selector: 'timer-start-page',
  templateUrl: 'timer-start-page.component.html'
})
export class TimerStartPage {
  timerValue: number = 60;

  constructor(private navCtrl: NavController,
              private timerService: TimerService) {
  }

  startGame() {
    console.log(this.timerValue);
    this.timerService.setTimerValue(this.timerValue);
    this.navCtrl.push(TimerListPage);
  }
}
