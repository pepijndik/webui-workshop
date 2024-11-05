import {Observable,RemoteData} from '/js/src/index.js';
export default class HomeModel extends Observable {
  constructor() {
    super();

    this._userName = "NOT inited";
    this._data = RemoteData.notAsked()
    this._greetingMessage = 'No message'
  }

  set greetingMessage(message){
    this._greetingMessage =message;
    this.notify();
  }

  get greetingMessage(){
    return this._greetingMessage;
  }
  get userName() {
    return this._userName;
  }
  set userName(userName) {
    this._userName = userName;
    this.notify();
  }

  get data(){
    return this._data;
  }

  set data(data){
    this._data = data;
    this.notify();
  }

  async retrieveInformation(name){
    this.data = RemoteData.loading();
    const {ok,result} = await model.loader.get(`/api/info/${name}`);

    this._data = ok ?  this.data = RemoteData.success(result) : this.data = RemoteData.failure("No Data found");
  }
}
