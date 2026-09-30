import { displayContent } from "../dom/display_content.js";
import type { DomLoadedData, TextData } from "../interfaces/types.js";

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { 
  month: 'long', 
  day: 'numeric', 
  year: 'numeric' 
});

let currentDateNow = formatter.format(date)

export function getRandomElement<T>(array: T[]):T | undefined {
    if (array.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function setTimeByTypingSpeed(speedType: string):number{
    switch(speedType){
        case 'slow':
            return 60;
        case 'normal':
            return 30;
        case 'fast':
            return 15;
        default:
            return 0; 
    }
}

export function loadNewText(elements: DomLoadedData, difficulty: string = "easy", currentDate: string = currentDateNow):void{
    let filteredTextByDifficulty: TextData[] = elements.data.filter((element) => element.difficulty == difficulty);

    elements.currentText = getRandomElement(filteredTextByDifficulty) as TextData;

    elements.text = elements.currentText.content;
    elements.initialSeconds = setTimeByTypingSpeed(elements.currentText.typingSpeed);
    elements.textReference.textContent = elements.text;
    elements.inputField.value = '';

    elements.timer.reset(elements.initialSeconds);
    elements.timerSpan.textContent = `${elements.initialSeconds}`;
    elements.timerSpan.classList.replace('bg-red-500', 'bg-yellow-300');

    elements.stats = {
        wpm: 0,
        accuracy: 0,
        errors: 0,
        time: 0,
        date: currentDate,
    };

    displayContent(elements.stats);

    elements.inputField.disabled = true;
    elements.startButton.disabled = false;
    elements.restartButton.disabled = true;
    elements.nextTextBtn.disabled = false;
}