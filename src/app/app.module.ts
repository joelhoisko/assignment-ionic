import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { TimerService } from './timer.service';
import { TimerListPage } from './timer-list-page/timer-list-page.component';
import { TimerRoot } from './timer-root/timer-root.component';
import { TimerListItem } from './timer-list-item/timer-list-item.component';

@NgModule({
  declarations: [
    TimerRoot,
    TimerListPage,
    TimerListItem
  ],
  imports: [
    IonicModule.forRoot(TimerRoot)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimerRoot,
    TimerListPage,
    TimerListItem
  ],
  providers: [TimerService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
