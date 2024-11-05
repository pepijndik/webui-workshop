import {h, mount, Observable} from '/js/src/index.js';
export default class AboutModel extends Observable {
  constructor() {
    super();
    const _requestedTimes = 0;
    this._detials = {
      _requestedTimes
    }
   
  }

  get detials() {
    return this._detials;
  }
  set detials(detials) {
    this._detials = {
      ...detials,
      requestedTimes: requestedTimes++
    };
 
    this.notify();
  }
}
