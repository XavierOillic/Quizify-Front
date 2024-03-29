import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerStatService {


  constructor() { }

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    const data = localStorage.getItem(key);
    if (data != null) {
      return JSON.parse(data);
    } return null;

  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }


}
