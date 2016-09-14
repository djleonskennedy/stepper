import {expect, assert} from "chai";
import EasyStep from './index';

describe('easy-step', () => {
  var inst = new EasyStep(null, [1,2,3], 150);
  it('should have all methods', function () {
    assert.isFunction(inst.on);
    assert.isFunction(inst.off);
    assert.isFunction(inst._emit);
    assert.isFunction(inst.reverseDirection);
    assert.isFunction(inst.moveForth);
    assert.isFunction(inst.moveBack);
    assert.isFunction(inst.trigger);
    assert.isFunction(inst.isForward);
    assert.isFunction(inst.isBackward);
    assert.isFunction(inst.checkRunningEnd);
    assert.isFunction(inst.run);
  })
});