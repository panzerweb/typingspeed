export function renderTextReference(
  paragraph: HTMLParagraphElement,
  text: string,
  input: string
) {
  paragraph.innerHTML = ""; // clear previous render

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");

    if (index < input.length) {
      if (input[index] === char) {
        span.className = "correct";
      } else {
        span.className = "wrong";
      }
    } else {
      span.className = "pending";
    }

    span.textContent = char;
    paragraph.appendChild(span);
  });
}
