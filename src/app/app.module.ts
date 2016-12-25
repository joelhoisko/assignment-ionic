import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { TimerService } from './timer.service';
import { TimerListPage } from './timer-list-page/timer-list-page.component';
import { TimerRoot } from './timer-root/timer-root.component';
import { TimerListItem } from './timer-list-item/timer-list-item.component';
import { TimerGameOver } from './timer-game-over/timer-game-over.component';
import { TimerStartPage } from './timer-start-page/timer-start-page.component';

@NgModule({
  declarations: [
    TimerRoot,
    TimerListPage,
    TimerListItem,
    TimerGameOver,
    TimerStartPage
  ],
  imports: [
    IonicModule.forRoot(TimerRoot)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimerRoot,
    TimerListPage,
    TimerListItem,
    TimerGameOver,
    TimerStartPage
  ],
  providers: [TimerService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
