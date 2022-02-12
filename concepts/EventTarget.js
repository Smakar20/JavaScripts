/*
Implement an EventTarget class similar to the EventTarget interface of the DOM, which keeps track of event listenters and dispatches events.
Your EventTarget class should have addEventListener, removeEventListener, dispatchEvent methods.
*/

class EventTarget {
  constructor() {
    this.eventMap = {};
  }

  addEventListener(name, callback) {
    this.eventMap[name] = (this.eventMap[name] ?? new Set()).add(callback);
  }

  removeEventListener(name, callback) {
    this.eventMap[name]?.delete(callback);
    if (this.eventMap[name]?.size === 0) delete this.eventMap[name];
  }

  dispatchEvent(name) {
    this.eventMap[name]?.forEach(func => func());
  }
}
