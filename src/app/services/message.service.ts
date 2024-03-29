import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private data = new BehaviorSubject<any>([]);
  getMessage = this.data.asObservable();

  constructor() {}

  setMessage(data: any) {
    this.data.next(data);
  }
}
