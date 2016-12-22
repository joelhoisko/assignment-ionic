import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

  private timerList: number[] = [60, 60, 60];

  public getTimers() {
    return this.timerList;
  }

}