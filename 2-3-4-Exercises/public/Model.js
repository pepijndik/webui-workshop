import AboutModel from './pages/about/About.js';
import HomeModel from './/pages/home/Home.js';
import {Observable, QueryRouter, Loader, sessionService, WebSocketClient} from '/js/src/index.js';

/**
 * Root of model tree
 * Handle global events: keyboard, websocket and router location change
 */
export default class Model extends Observable {
  /**
   * Load all sub-models and bind event handlers
   */
  constructor() {
    super();

    this.session = sessionService.get();
    this.session.personid = parseInt(this.session.personid, 10);

    this.loader = new Loader(this);
    this.loader.bubbleTo(this);

    this.homeModel = new HomeModel(this)
    this.homeModel.bubbleTo(this);

    this.aboutModel = new AboutModel(this)
    this.aboutModel.bubbleTo(this);


    this.wsClient = new WebSocketClient();
    this.wsClient.addListener('hello',this.handleWsCommand.bind(this));

    // Setup router
    this.router = new QueryRouter();
    this.router.observe(this.handleLocationChange.bind(this));
    this.router.bubbleTo(this);

    this.handleLocationChange(); // Init first page
  }

  handleWsCommand(message){
    const {payload,command} = message;
    switch(command){
      case 'hello':
        this.homeModel.greetingMessage = payload.message
      default:
        console.log("No supported command")
    }
    console.log('Received message', message);
  }

  /**
   * Delegates sub-model actions depending on new location of the page
   */
  handleLocationChange() {
    switch (this.router.params.page) {
      case 'home':
      //  this.homeModel.retrieveInformation('www3');
        break;
     case 'about':
          break;
      default:
        this.router.go('?page=home');
        break;
    }
  }
}
