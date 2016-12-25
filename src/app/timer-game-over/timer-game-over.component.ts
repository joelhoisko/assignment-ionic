import { Component } from '@angular/core';
import { AlertController, Platform, NavController } from 'ionic-angular';

@Component({
  selector: 'timer-game-over',
  templateUrl: 'timer-game-over.component.html'
})
export class TimerGameOver {

  constructor(private alertCtrl: AlertController,
              private platform: Platform,
              private navCtrl: NavController) {
  }

  gameOver() {
    let confirm = this.alertCtrl.create({
      enableBackdropDismiss: false,
      title: 'Game over!',
      message: 'New game?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'Reset!',
          handler: () => {
            location.reload();
          }
        }
      ]
    });
    confirm.present();
  }

}
