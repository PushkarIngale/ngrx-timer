import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { initTimer, startTimer, stopTimer } from './store/actions/timer.actions';
import { State } from './store/reducers/timer.reducer'
import { selectTimer } from './store/selectors/timer.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ngRx-timer-14';

  timer$!: Observable<State>;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {

    this.timer$ = this.store.pipe(select(selectTimer));

    this.store.dispatch(initTimer({
      totalTime: 120
    }));
  }

  ngAfterViewInit(): void {
    this.store.dispatch(startTimer());
  }

  startTimer()
  {
    this.store.dispatch(startTimer());
  }

  stopTimer()
  {
    this.store.dispatch(stopTimer());
  }
}
