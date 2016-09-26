export default class EasyStep {
  constructor(trigger, elements, delay = 10) {
    this.direction = -1;
    this.running = 0;
    this.currentItem = 0;
    this.timeout = delay;
    this.__events = {};
    this.elements = Array.from(elements);
    if (trigger != null) {
      trigger.addEventListener("click", this.trigger.bind(this, arguments));
    }
  }

  // this is on function
  on(event, cb) {
    this.__events[event] = [];
    this.__events[event].push(cb);
  }

  off(event, cb) {
    this.__events[event] = this.__events[event]
      .filter(fn => fn !== cb);
  }

  _emit(event, data) {
    if (this.__events[event] != null) {
      this.__events[event].forEach(fn => {
        fn(data);
      });
    }
  }

  reverseDirection() {
    this.direction *= -1;
  }

  moveForth() {
    this.direction = 1;
    this.run();
  }

  moveBack() {
    this.direction = -1;
    this.run();
  }

  trigger() {
    this.reverseDirection();
    if (this.running === 0) {
      this.run();
    }
  }

  isForward() {
    return this.direction === 1 && this.currentItem < this.elements.length;
  }

  isBackward() {
    return this.direction == -1 && this.currentItem > 0;
  }

  checkRunningEnd() {
    if (this.running === 1 && this.currentItem === this.elements.length || this.currentItem == 0) {
      this.running = 0;
      this._emit('on-complete');
    } else {
      setTimeout(this.run.bind(this), this.timeout);
    }
  }

  run() {
    this.running = 1;
    if (this.isForward()) {
      this._emit('on-forward', this.elements[this.currentItem]);
      this.currentItem += this.direction;
    }
    if (this.isBackward()) {
      this.currentItem += this.direction;
      this._emit('on-backward', this.elements[this.currentItem]);
    }
    this.checkRunningEnd();
  }
}