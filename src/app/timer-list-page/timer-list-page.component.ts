import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Observable } from "rxjs/Rx";
import { Subscription } from "../../../node_modules/rxjs/Subscription";
import { AlertController, NavController } from 'ionic-angular';

import { TimerService } from '../timer.service';
import { TimerListItem } from '../timer-list-item/timer-list-item.component';
import { TimerGameOver } from '../timer-game-over/timer-game-over.component';

@Component({
  selector: 'timer-list-page',
  templateUrl: 'timer-list-page.component.html'
})

export class TimerListPage {

  timerItemList: TimerListItem[] = [];
  valueList: number[];
  oldValueList: number[];
  watchSelector: number;
  observable: Observable<number>;
  subscription: Subscription;

  constructor(private platform: Platform,
              private timerService: TimerService,
              private alertCtrl: AlertController,
              private navCtrl: NavController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      // Splashscreen.hide();
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
    this.watchSelector = 1;
    this.checkWatch();
  }

  nextWatch() {
    if (this.watchSelector === 3) {
      this.watchSelector = 1;
    } else {
      this.watchSelector++;
    }
    this.checkWatch();
  }

  checkWatch() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.watchSelector === 1) {
      this.oldValueList[2] = this.valueList[2];
      this.subscription = this.observable.subscribe(t => this.ticker(t, this.oldValueList[0], 0));
    } else if (this.watchSelector === 2) {
      this.oldValueList[0] = this.valueList[0];
      this.subscription = this.observable.subscribe(t => this.ticker(t, this.oldValueList[1], 1));
    } else {
      this.oldValueList[1] = this.valueList[1];
      this.subscription = this.observable.subscribe(t => this.ticker(t, this.oldValueList[2], 2));
    }
  }

  // i have idea
  ticker(tick: number, oldValue: number, valueIndex: number) {

    if (oldValue - tick < 0) {
      new TimerGameOver(this.alertCtrl, this.platform, this.navCtrl).gameOver();
      this.subscription.unsubscribe();
    } else {
      this.valueList[valueIndex] = oldValue - tick;
    }
  }

  reset() {
    this.watchSelector = 1;
    this.subscription.unsubscribe();
    this.init();
    location.reload();
  }
}
