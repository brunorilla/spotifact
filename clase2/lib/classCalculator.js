"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Calculator() {
    _classCallCheck(this, Calculator);

    this.result = 0;
  }

  _createClass(Calculator, [{
    key: "setResult",
    value: function setResult(x) {
      this.isNumber(x);
      this.result = x;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }, {
    key: "add",
    value: function add() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isNumber(x);
      this.setResult(this.getResult() + x);
    }
  }, {
    key: "sub",
    value: function sub() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isNumber(x);
      this.setResult(this.getResult() - x);
    }
  }, {
    key: "div",
    value: function div() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isNumber(x);
      this.setResult(this.getResult() / x);
    }
  }, {
    key: "mul",
    value: function mul() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isNumber(x);
      this.setResult(this.getResult() * x);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setResult(0);
    }
  }]);

  return Calculator;
}();