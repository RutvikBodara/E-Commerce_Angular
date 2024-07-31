import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  private replaySubject:ReplaySubject<string> = new ReplaySubject<string>(5,5000);
  replaySubject$ = this.replaySubject.asObservable();

  addInReplySubject(val:string){
    this.replaySubject.next(val)
  }

  asyncSubjectDemo : AsyncSubject<string> = new AsyncSubject<string>()
  // asyncSubjectDemo$ = this.asyncSubjectDemo.asObservable()

  addasyncSubjectDemo(val:string){
    this.asyncSubjectDemo.next(val)
  }
}
