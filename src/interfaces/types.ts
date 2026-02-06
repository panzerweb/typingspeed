import type { TimerClass } from "../classes/timer_class.js";

export type TypingStats = {
    wpm: number,
    accuracy: number,
    errors: number,
    time: number,
};

export type TextData = {
    id: number,
    content: string;
    type: string;
    typingSpeed: string;
};

export type DomLoadedData = {
    data: TextData[],
    currentText: TextData,
    text: string,
    initialSeconds: number,
    textReference: HTMLParagraphElement,
    inputField: HTMLInputElement,
    timer: TimerClass,
    timerSpan: HTMLSpanElement,
    stats: TypingStats,
    startButton: HTMLButtonElement,
    restartButton: HTMLButtonElement,
    nextTextBtn: HTMLButtonElement,
}