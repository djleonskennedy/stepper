'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stepper = function () {
  function Stepper(trigger, elements) {
    var delay = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

    _classCallCheck(this, Stepper);

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

  _createClass(Stepper, [{
    key: 'on',
    value: function on(event, cb) {
      this.__events[event] = [];
      this.__events[event].push(cb);
    }
  }, {
    key: 'off',
    value: function off(event, cb) {
      this.__events[event] = this.__events[event].filter(function (fn) {
        return fn !== cb;
      });
    }
  }, {
    key: '_emit',
    value: function _emit(event, data) {
      if (this.__events[event] != null) {
        this.__events[event].forEach(function (fn) {
          fn(data);
        });
      }
    }
  }, {
    key: 'reverseDirection',
    value: function reverseDirection() {
      this.direction *= -1;
    }
  }, {
    key: 'moveForth',
    value: function moveForth() {
      this.direction = 1;
      this.run();
    }
  }, {
    key: 'moveBack',
    value: function moveBack() {
      this.direction = -1;
      this.run();
    }
  }, {
    key: 'trigger',
    value: function trigger() {
      this.reverseDirection();
      if (this.running === 0) {
        this.run();
      }
    }
  }, {
    key: 'isForward',
    value: function isForward() {
      return this.direction === 1 && this.currentItem < this.elements.length;
    }
  }, {
    key: 'isBackward',
    value: function isBackward() {
      return this.direction == -1 && this.currentItem > 0;
    }
  }, {
    key: 'checkRunningEnd',
    value: function checkRunningEnd() {
      if (this.running === 1 && this.currentItem === this.elements.length || this.currentItem == 0) {
        this.running = 0;
        this._emit('on-complete');
      } else {
        setTimeout(this.run.bind(this), this.timeout);
      }
    }
  }, {
    key: 'run',
    value: function run() {
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
  }]);

  return Stepper;
}();

exports.default = Stepper;