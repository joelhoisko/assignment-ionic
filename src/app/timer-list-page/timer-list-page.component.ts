import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Observable } from "rxjs/Rx";
import { Subscription } from "../../../node_modules/rxjs/Subscription";

import { TimerService } from '../timer.service';
import { TimerListItem } from '../timer-list-item/timer-list-item.component'
import { DoCheck } from "../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'timer-page',
  templateUrl: 'timer-list-page.component.html'
})

export class TimerListPage {

  timerItemList: TimerListItem[] = [];
  valueList: number[];
  oldValueList: number[];
  watchSelector: number = 1;
  observable: Observable<number>;
  subscription: Subscription;

  constructor(private platform: Platform,
              private timerService: TimerService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ionViewDidLoad() {
    this.init();
  }

  init() {
    console.log("INTIIIIIT");
    this.valueList = this.timerService.getTimers();
    this.oldValueList = this.valueList.slice();
    this.timerItemList = [];

    for (let value of this.valueList) {
      let item = new TimerListItem();
      item.timerValue = value;
      this.timerItemList.push(item);
    }

    this.observable = Observable.timer(0, 1000);
    this.subscription = this.observable.subscribe(t => this.valueList[0] = this.oldValueList[0] - t);
  }

  nextWatch() {
    if (this.watchSelector === 3) {
      this.watchSelector = 1;
    } else {
      this.watchSelector++;
    }

    this.subscription.unsubscribe();

    if (this.watchSelector === 1) {
      this.oldValueList[2] = this.valueList[2];
      this.subscription = this.observable.subscribe(t => this.ticker(t, this.oldValueList[0]));
      // this.subscription = this.observable.subscribe(t => this.valueList[0] = this.oldValueList[0] - t);
    } else if (this.watchSelector === 2) {
      this.oldValueList[0] = this.valueList[0];
      this.subscription = this.observable.subscribe(t => this.valueList[1] = this.oldValueList[1] - t);
    } else {
      this.oldValueList[1] = this.valueList[1];
      this.subscription = this.observable.subscribe(t => this.valueList[2] = this.oldValueList[2] - t);
    }
  }

  // i have no idea
  ticker(tick: number, oldValue: number) {
    if (oldValue - tick > 50) {
      console.log('SEISEISEISEISEISEISEI');
    } else {
      this.valueList[0] = oldValue - tick;
    }
  }

  reset() {
    this.watchSelector = 1;
    this.subscription.unsubscribe();
    this.init();
    location.reload();
  }

  /*
  ngDoCheck() {
    if (this.timerItemList[0]) {
      if (this.timerItemList[0].timerValue < 50) {
        console.log("VÄHEMMÄÄNNNNÄNÄ");
      }
    }
  }
  */

}
