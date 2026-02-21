import { TimerClass } from "../classes/timer_class.js";
import type { DomLoadedData, TextData, TypingStats } from "../interfaces/types.js";
import {TypingService } from "../services/typing_service.js";
import { displayContent } from "./display_content.js";
import { renderTextReference } from "./render_text_reference.js";
import { data } from "../data/texts.js";
import { loadNewText } from "../services/text_service.js";

let domData!: DomLoadedData;

// HTML Elements
const textReference = document.getElementById("text_reference") as HTMLParagraphElement;
const inputField = document.getElementById("text_input") as HTMLInputElement;
const startButton = document.getElementById("start_button") as HTMLButtonElement;
const restartButton = document.getElementById("restart_button") as HTMLButtonElement;
const timerSpan = document.getElementById("timer-span") as HTMLSpanElement;
const nextTextBtn = document.getElementById("next-text-btn") as HTMLButtonElement;
const difficultyOption = document.getElementById("difficulty_options") as HTMLSelectElement;

const timer:TimerClass = new TimerClass(0);

document.addEventListener("DOMContentLoaded", () => {
    domData = {
        data,
        currentText: {} as TextData,
        text: '',
        initialSeconds: 0,

        textReference,
        inputField,
        timer,
        timerSpan,

        stats: {
            wpm: 0,
            accuracy: 0,
            errors: 0,
            time: 0,
        },

        startButton,
        restartButton,
        nextTextBtn,
    };

    loadNewText(domData);
});

difficultyOption.addEventListener("change", () => {
    const difficulty = difficultyOption.value;

    loadNewText(domData, difficulty);
})

nextTextBtn.addEventListener('click', () => {
    const difficulty = difficultyOption.value;

    loadNewText(domData, difficulty);
})


startButton.addEventListener('click', () => {
    inputField.toggleAttribute("disabled");
    nextTextBtn.toggleAttribute("disabled");
    timer.start();
    timer.startCounter((timeCount) => {
        timerSpan.textContent = `${timeCount}`;
        if (timeCount == 0) {
            timerSpan.classList.replace('bg-yellow-300', 'bg-red-500');
        }
    },() => {
        inputField.toggleAttribute("disabled");
        startButton.toggleAttribute("disabled");
        restartButton.disabled = false;

        domData.stats = TypingService(domData.text, inputField.value, timer);
        displayContent(domData.stats);
    });

});

inputField.addEventListener('input', () => {
    domData.stats = TypingService(domData.text, inputField.value, timer);

    renderTextReference(
        textReference,
        domData.text,
        inputField.value
    );
})

restartButton.addEventListener('click', () => {
    loadNewText(domData);
});
