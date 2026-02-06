"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerClass = void 0;
var TimerClass = /** @class */ (function () {
    function TimerClass() {
        this.startTime = 0;
    }
    TimerClass.prototype.start = function () {
        return this.startTime = Date.now();
    };
    TimerClass.prototype.getTime = function () {
        return Math.floor((Date.now() - this.startTime) / 1000);
    };
    TimerClass.prototype.resetTime = function () {
        this.startTime = 0;
    };
    return TimerClass;
}());
exports.TimerClass = TimerClass;
