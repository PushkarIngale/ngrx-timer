import { Injectable } from '@angular/core';
import { Subject, interval, takeUntil, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  kill$ = new Subject<boolean>();
  timer$ = interval(1000).pipe(takeUntil(this.kill$));
  constructor() { }

  start()
  {
    return this.timer$
  }

  stop()
  {
    return this.kill$.next(true);
  }



}
