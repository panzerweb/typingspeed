import type { TypingStats } from "../interfaces/types.js";

const statsDiv = document.querySelector(".stats_wrapper")! as HTMLDivElement;

export function displayContent(stats?: TypingStats): void{
    statsDiv.innerHTML = 
    `
        <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-sm text-gray-500">WPM</p>
            <p class="text-2xl font-semibold">${stats!.wpm}</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-sm text-gray-500">Accuracy</p>
            <p class="text-2xl font-semibold">${stats!.accuracy.toFixed(2)}</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-sm text-gray-500">Errors</p>
            <p class="text-2xl font-semibold">${stats!.errors}</p>
        </div>
    `;
}