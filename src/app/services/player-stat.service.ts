import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerStatService {

  games: number = 0;

  constructor() { }

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }


}