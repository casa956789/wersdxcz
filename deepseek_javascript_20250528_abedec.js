// services/alertService.js
class AlertService {
  constructor() {
    this.socket = new WebSocket('wss://alerts.dropdash.app');
  }

  subscribe(address) {
    this.socket.send(JSON.stringify({
      type: 'subscribe',
      address
    }));
  }
}