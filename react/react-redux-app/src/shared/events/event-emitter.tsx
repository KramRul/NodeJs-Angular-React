export class EventEmitter {
  private events: { [id: string]: { listeners: Array<Function> } } = {};

  subscribe(event: string, listener: Function) {
    if (!this.events[event]) {
      this.events[event] = { listeners: [] }
    }
    this.events[event].listeners.push(listener);
  };

  off(event: string) {
    delete this.events[event];
  };

  emit(name: string, ...payload: any[]) {
    for (const listener of this.events[name].listeners) {
      listener.apply(this, payload)
    }
  }
};