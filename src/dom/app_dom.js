"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timer_class_js_1 = require("../classes/timer_class.js");
var typing_service_js_1 = require("../services/typing_service.js");
var text = "This is a sample text";
var textReference = document.getElementById("text_reference");
var inputField = document.getElementById("text_input");
var statsDiv = document.querySelector(".stats_wrapper");
var startButton = document.getElementById("start_button");
var timer = new timer_class_js_1.TimerClass();
textReference.textContent = text;
startButton.addEventListener('click', function () {
    inputField.toggleAttribute("disabled");
    timer.start();
});
inputField.addEventListener('input', function () {
    var stats = (0, typing_service_js_1.TypingService)(text, inputField.value, timer);
    statsDiv.textContent =
        "\n        WPM: ".concat(stats.wpm, "\n        Accuracy: ").concat(stats.accuracy, "\n        Errors:  ").concat(stats.errors, "\n        Time: ").concat(stats.time, "\n        Finished: ").concat(stats.isFinished, "\n    ");
});
