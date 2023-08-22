/* Modify content */
const header = document.querySelector('h1');

// Inspecting item contents from the console.
console.log(header);
// Gets the text string of the element.
console.log(header.textContent);
/* Gets the element's text string only if the element's visibility is active from the CSS.
console.log(header.innerText); */
/* Gets the HTML code of the element.
console.log(header.innerHTML); */

// Dynamically change the text of the element.
document.querySelector('h1').textContent = 'Modern JavaScript';

/* Modify styles (example) */
const check = document.querySelector('div > div');
check.style.visibility = 'visible';
