"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypingService = TypingService;
function TypingService(textReference, textInput, timer) {
    var time = timer.getTime();
    var errors = countErrors(textReference, textInput);
    var accuracy = textInput.length ? ((textInput.length - errors) / textInput.length) * 100 : 100;
    var wpm = time ? Math.round((textInput.length / 5) / (time / 60)) : 0;
    var isFinished = textInput.length == textReference.length;
    return { wpm: wpm, accuracy: accuracy, errors: errors, time: time, isFinished: isFinished };
}
function countErrors(text, input) {
    return input.split("").filter(function (character, index) { return character !== text[index]; }).length;
}
