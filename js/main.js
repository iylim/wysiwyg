import toggleActive from './toggleActive.js';

// select edit buttons
// add event listeners (click) to each button
document.querySelectorAll('.edit-button').forEach(button => button.addEventListener('click', toggleActive));
