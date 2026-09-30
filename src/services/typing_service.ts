import type { TimerClass } from "../classes/timer_class.js";
import type { TypingStats } from "../interfaces/types.js";

// Typing service, this method calculates the different statistics after typing
export function TypingService(textReference:string, textInput:string, timer: TimerClass, date?:string) : TypingStats {
    const time:number = timer.getTime();
    const errors:number = countErrors(textReference, textInput);
    const accuracy:number = textInput.length ? ((textInput.length - errors) / textInput.length) * 100 : 100;
    const wpm:number = time ? Math.round((textInput.length / 5) / (time / 60)) : 0;

    return {wpm, accuracy, errors, time, date};
    
}

// Count the errors by characters
function countErrors(text: string, input:string):number {
    return input.split("").filter((character, index) => character !== text[index]).length;
}
