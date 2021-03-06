(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.Lazy = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createFromValue = createFromValue;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function createFromValue(v) {
        return new Lazy(function () {
            return v;
        });
    }

    var Lazy = function () {
        function Lazy(factory) {
            _classCallCheck(this, Lazy);

            this.factory = factory;
            this.isValueCreated = false;
        }

        _createClass(Lazy, [{
            key: "value",
            get: function get() {
                if (!this.isValueCreated) {
                    this.createdValue = this.factory();
                    this.isValueCreated = true;
                }
                return this.createdValue;
            }
        }]);

        return Lazy;
    }();

    exports.default = Lazy;
});