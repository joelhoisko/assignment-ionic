import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

  private timerValue: number;
  private timerList: number[] = [60, 60, 60];

  public setTimerValue(value: number) {
    this.timerValue = Math.floor(value);
  }

  public getTimers() {
    this.timerList = [this.timerValue, this.timerValue, this.timerValue];
    return this.timerList;
  }

}
