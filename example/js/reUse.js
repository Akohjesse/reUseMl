"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReUseMl =
function () {
  function ReUseMl() {
    _classCallCheck(this, ReUseMl);
  }

  _createClass(ReUseMl, [{
    key: "set",
    value: function set(views) {
      this.views = views;
    }
  }, {
    key: "render",
    value: function render(file, placement) {
      var insert = document.querySelector(placement);
      fetch(this.views + '/' + file).then(function (res) {
        return res.text();
      }).then(function (data) {
        insert.innerHTML = data;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }]);

  return ReUseMl;
}();